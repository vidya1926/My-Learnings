
import test from '@playwright/test'
test(`Handling leafground with pages`,async({context,page})=>{

    await page.goto("https://leafground.com/window.xhtml")

    const newPromise=page.waitForEvent('popup')
    page.getByText("Open",{exact:true}).click()
    const newTab=await newPromise  
    console.log(await newTab.title())  //child tab title
    console.log(newTab)
    await newTab.bringToFront()  //activate the parent page
    console.log(await page.title()) //parent tab title
    await newTab.locator("#email").fill("vidya@gmail.com")
    await page.waitForTimeout(2000)

  const newPagePromise = context.waitForEvent('page');
  await newTab.evaluate(() => {
    window.open('https://www.flipkart.com');
  });
  const tab=await newPagePromise

  await tab.waitForLoadState();

  console.log("New Tab URL:",  tab.url());
  console.log("New Tab Title:", await tab.title());
})