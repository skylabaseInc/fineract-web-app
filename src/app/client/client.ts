export interface Client {
    totalFilteredRecords: number
    pageItems: PageItems[]
}

export class PageItems {
    id: number
    accountNo: string
    status: Status
    substatus: Substatus
    active: boolean
    activationDate: number[]
    firstname: string
    lastname: string
    displayName: string
    gender: Substatus
    clientType: Substatus
    clientClassification: Substatus
    isStaff: boolean
    officeId: number
    officeName: string
    staffId: number
    staffName: string
    timeline: Timeline[]
    clientNonPersonDetails: ClientNonPersonDetails[]
}

class ClientNonPersonDetails {
    constitution: Substatus
    mainBusinessLine: Substatus
}

class Timeline {
    submittedOnDate: number[]
    submittedByUsername: string
    submittedByFirstname: string
    submittedByLastname: string
    activatedOnDate: number[]
    activatedByUsername: string
    activatedByFirstname: string
    activatedByLastname: string

}

class Status {
    id: number
    code: string
    value: string
}

class Substatus {
    active: boolean
    mandatory: boolean
}
