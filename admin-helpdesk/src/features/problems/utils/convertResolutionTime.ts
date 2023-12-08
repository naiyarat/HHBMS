export const convertResolutionTime = (seconds: number) => {

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    let result = '';
    if (hours > 0) {
        result += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    }
    if (minutes > 0) {
        result += `${result.length > 0 ? ' ' : ''}${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }

    return result.length > 0 ? result : 'Less than a minute';
};