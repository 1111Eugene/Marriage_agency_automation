const { Builder, By } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

options.setChromeBinaryPath("d:/SELENIUM/Chrome/Application/chrome.exe");

options.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\Alla_Messages_1\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
	"--start-maximized",
]);
options.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver10 = new Builder().forBrowser("chrome").setChromeOptions(options).build();

Active_newMessage();

async function Active_newMessage() {
	let dialogsArray = [];
	await driver10.get("http://***");

	for (;;) {
		try {
			await driver10.findElement(By.xpath("/html/body/div/div[4]/div/div[2]/div[2]/button")).click();
			await driver10.sleep(3000);
		} catch {
			await driver10.sleep(3000);
			let text = await driver10.findElement(By.className("dialog-user-text")).getAttribute("innerText");
			await driver10.sleep(1000);
			if (!text.startsWith("You sent") && !text.startsWith("You:") && !text.startsWith("You liked") && !dialogsArray.includes(text)) {
				dialogsArray.push(text);
				player.play("NEWmessage_Alla.mp3");
			}
			console.log(dialogsArray);
			await driver10.sleep(10500);
			driver10.navigate().refresh();
		}
	}
}
