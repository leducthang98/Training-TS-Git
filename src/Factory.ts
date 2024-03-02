export class Factory {
  route: string = "/admin"
  commandOutput?: string

  constructor(execute: (route: string) => string) {
    this.commandOutput = execute(this.route)
  }

  get command() {
    return this.commandOutput
  }
}