export default interface SportBuffClientResponse<T = any> {
  body: T
  statusCode: number
  headers: Record<string, string>
}
