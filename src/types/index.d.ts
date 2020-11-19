declare namespace API{
  interface UserInfo {
    userId: number
    userName: string
  }

  interface Result<T>{
    code: number
    msg: string
    data: T
  }

  enum SSType {
    IDA = 'id_a',
    IDB = 'id_b'
  }
}
