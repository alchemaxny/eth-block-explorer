import { Utils } from "alchemy-sdk";

export const formatAddress = (address) => {
    return `${address.slice(0, 5)}...${address.slice(-5)}`;
};
export const formatEther = (wei) => {
    return Utils.formatEther(wei);
};