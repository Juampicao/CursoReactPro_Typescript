export interface IAxiosState {
  loading: false,
  errorAPI: null,
  respuestaAPI: any,
}

export enum IMethods{
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete"
}


// Class for create axios request using useAxios.tsx
export class FetchAxios {
  url: string; 
  method: IMethods
  data!: any
  functionName!: string

  /**
   * 
   * @param url string.
   * @param method IMethod ([get, post, delete,put])
   * @param data body to send.
   * @param functionName where you are calling the function
   */
  constructor(url: string, method: IMethods, data: any, functionName: string) {
    this.url = url,
    this.method = method
    this.data = data
    this.functionName = functionName
  }
}