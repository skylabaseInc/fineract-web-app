export class ClientTemplate {
    activationDate: number []
    isStaff: boolean
    officeId: number
    officeOptions: OfficeOptions[]
    staffOptions: StaffOptions[]
    savingProductOptions: SavingProductOptions[]
    genderOptions: GenderOptions[]
    clientTypeOptions: any[]
    clientClassificationOptions: any[]
    clientNonPersonConstitutionOptions: any[]
    clientNonPersonMainBusinessLineOptions: any[]
    clientLegalFormOptions: ClientLegalFormOptions[]
    familyMemberOptions: FamilyMemberOptions[]
    isAddressEnabled: boolean
}

class FamilyMemberOptions {
    relationshipIdOptions: any[]
    genderIdOptions: GenderOptions[]
    maritalStatusIdOptions: any[]
    professionIdOptions: any[]
}

class ClientLegalFormOptions {
    id: number
    code: string
    value: string
}

class GenderOptions {
    id: number
    name: string
    position: number
    active: boolean
    mandatory: boolean
}

class OfficeOptions {
    id: number
    name: string
    nameDecorated: string
}

class StaffOptions {
    id: number
    firstname: string
    lastname: string
    displayName: string
    officeId: number
    officeName: string
    isLoanOfficer: boolean
    isActive: boolean
}

class SavingProductOptions {
    id: number
    name: string
    withdrawalFeeForTransfers: boolean
    allowOverdraft: boolean
    enforceMinRequiredBalance: boolean
    withHoldTax: boolean
}