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
    } else {
        if (err?.response?.data?.message?.message) {
            message = err?.response?.data?.message.message
        } else {
            message = err?.response?.data?.message
        }
    }

    console.log('err_full', err)
    Error(message)
}