export const getDropdownOptions = (data: any) => {
    return data.map((row : any) => {
        return {
            label: row.name,
            value: row.name,
        }
    })
}

export const getSerialNumberOptions = (data: any) => {
    return data.map((row : any) => {
        return {
            label: row.serialNumber,
            value: row.serialNumber,
        }
    })
}

export const getFormDropdownOptions = (data: any) => {
    return data.map((row : any) => {
        return {
            label: row.name,
            value: row.id,
        }
    })
}
export const getProblemDropdownOptions = (data: any) => {
    return data.map((row : any) => {
        return {
            label: row.id,
            value: row.id,
        }
    })
}