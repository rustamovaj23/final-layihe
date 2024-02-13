import {toast, Bounce} from 'react-toastify';
import each from 'lodash/each'

const ToastOptions = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

export function handleSuccess(msg) {
    toast.success(msg, ToastOptions);
}

export function Error(msg) {
    toast.error(msg, ToastOptions);
}

export function handleError(err) {
    let message = ''
    if (typeof err == 'string') {
        message = err
        console.log('err_str', err)
    } else {
        console.log('err_full', err?.response?.data)
        if (err?.response?.data?.errors) {
            const errors = err.response.data.errors
            let i = 0
            each(errors, (error) => {
                i++
                message += '<br>' + i + ') ' + error[0]
            })
        } else {
            message = err?.response?.data?.message
        }
    }
    Error(message)
}