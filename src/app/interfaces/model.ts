export interface ContactInterface{
    name: string,
    email: string,
    Comments: string
}

export interface ContactInterfaceFeedbackInterface{
    status: boolean,
    message?: string,
    data?: any
}