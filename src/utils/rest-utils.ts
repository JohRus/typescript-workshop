export enum RestStatus {
    INITIALISERT = "INITIALISERT",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS"
}

export type RestStatusTypes =
    | RestStatus.INITIALISERT
    | RestStatus.SUCCESS
    | RestStatus.PENDING