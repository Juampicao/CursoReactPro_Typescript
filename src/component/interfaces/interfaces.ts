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

export class FetchAxios {
  url: string; 
  method: IMethods
  data!: any
  
  constructor(url: string, method: IMethods, data: any) {
    this.url = url,
    this.method = method
    this.data = data
  }
}