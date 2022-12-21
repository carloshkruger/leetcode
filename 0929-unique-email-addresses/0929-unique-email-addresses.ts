function numUniqueEmails(emails: string[]): number {
    const emailsAlreadySentList = new Map()
    let answer = 0
    
    for (const email of emails) {
        let [localName, domainName] = email.split('@')
        const plusSignSignal = localName.indexOf('+')
        
        if (plusSignSignal > -1) {
            localName = localName.substring(0, plusSignSignal)
        }
        
        localName = localName.replace(/\./g, '')

        const newEmail = `${localName}@${domainName}`
        
        if (!emailsAlreadySentList.has(newEmail)) {
            emailsAlreadySentList.set(newEmail, true)
            answer++
        }
    }
    
    return answer
};