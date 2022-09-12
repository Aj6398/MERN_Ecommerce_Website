import { ReactReduxContext } from "react-redux"


// Useful for not to showing full text => after certain words-count => convert that to "..."
export const addEllipsis = (text) => {
    if (text.length > 50) {
        return text.substring(0,50) + '...';
    }
    return text;
}