import test, { Browser, expect } from '@playwright/test'


const username = "admin"
const password = "AupH4z@O+Hp5"
const credentials = `${username}:${password}`
console.log(credentials)
const auth = btoa(credentials)

let sysId: any
test("Service to create instance", async ({ browser }) => {
    const browserContext = await browser.newContext()
    const request = browserContext.request

    const resBody = await request.post("https://dev324532.service-now.com/api/now/table/incident", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${auth}`
        },
        data: {
            "short-description": "Learning api through pw"
        }
    })
    const res = await resBody.json()
    sysId = res.result.sys_id
    console.log(sysId)
    expect(resBody.statusText()).toBe("Created")


})

test("Service to update instance", async ({ browser }) => {
    const browserContext = await browser.newContext()
    const request = browserContext.request

    const resBody = await request.patch(`https://dev324532.service-now.com/api/now/table/incident/${sysId}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${auth}`
        },
        data: {
            "description": "updating Learning api through pw"
        }
    })
    const res = await resBody.json()
    const des = res.result.description
    console.log(des)
    expect(resBody.statusText()).toBe("OK")
})