import { tLogLevel, tLogTag } from "./types";

/**
 * logger API 定义
 * 
 * @export
 * @interface loggerAPI
 */
export abstract class tLogger {
    level: tLogLevel
    readonly tags: string[]
    abstract readonly debug: (msg: any) => void
    abstract readonly log: (msg: any) => void
    abstract readonly note: (msg: any) => void
    abstract readonly info: (msg: any) => void
    abstract readonly warn: (msg: any) => void
    abstract readonly error: (msg: any) => void
    abstract readonly fault: (msg: any) => void
    abstract readonly logger: (tags: tLogTag[]) => tLogger
}