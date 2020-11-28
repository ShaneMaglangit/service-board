export default class Contact {
    constructor(id, lastUpdated, members, membersId, recentMessage) {
        this.id = id
        this.lastUpdated = lastUpdated
        this.members = members
        this.membersId = membersId
        this.recentMessage = recentMessage
    }
}