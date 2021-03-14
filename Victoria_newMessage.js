const { Builder, By, Key, until } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
const ks = require("node-key-sender");
ks.setOption("globalDelayPressMillisec", 1000);

options.setChromeBinaryPath("d:/SELENIUM/Chrome/Application/chrome.exe");

options.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\Victoria_message_1\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
	"--start-maximized",
]);
options.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver3 = new Builder().forBrowser("chrome").setChromeOptions(options).build();

Active_newMessage();

async function Active_newMessage() {
	let chatsArray = new Array();
	let msgArray = new Array();
	let tabCount = 2;
	for (;;) {
		try {
			let greetings = [
				"Hello",
				"Hi",
				"Good day",
				"Bonjour",
				"Greetings",
				"What's up",
				"How are you",
				"What's happening",
				"Aloha",
				"Buenos dias",
				"Buenas noches",
				"Howdy",
				"Hi-ya",
				"Hey",
				"How goes it",
				"Salute",
				"Ciao",
				"Salutations",
				"How do you do",
				"How's it going",
				"How goes it",
				"What's good",
				"How are things",
				"Pleased to meet you",
				"Nice to meet you",
				"Glad to meet you",
				"it's good to see you",
				"What's in the bag",
				"Rise and shine",
				"Hi there",
			];
			let Messages = [
				"What's happening?:) mmmmm.... Do you kiss on a first date?",
				"Do you plan to have kids?",
				"What are you? Do you like your job?",
				"mmm.. may I ask right away? What is your biggest fantasy?",
				"mmm.. may I ask right away? What is your biggest obsession?",
				"..What is your first impression about me?",
				"Are you having a good time?",
				"So...What drew you to my profile?",
				"What are you looking for in a relationship?",
				"What makes you laugh?",
				"...Do you have a dream you’re pursuing?",
				"Would you share with me what's your biggest passion?",
				"So... what’s on your bucket list?",
				"Could you tell me what makes you unique?",
				"What’s something you’re proud of?",
				"What are you passionate about?",
				"If you wanted to kiss me, where would you take me to make it perfect?",
			];
			await driver3.get("http://***");
			const originalWindow = await driver3.getWindowHandle();

			try {
				// login if needed
				await driver3.findElement(By.xpath("/html/body/div/div[4]/div/div[2]/div[2]/button")).click();
				await driver3.sleep(3000);
			} catch {
				await driver3.sleep(3000);

				await driver3
					.wait(
						until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/div/div")),
						10000
					)
					.click();
				// await driver3.sleep(1000);
				// last message text
				await driver3.sleep(3000);
				let msgText = await driver3.wait(until.elementLocated(By.className("dialog-user-text")), 10000).getAttribute("innerText");

				let link1 = await driver3
					.wait(until.elementLocated(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`)), 10000)
					.getAttribute("href");
				let link2 = "***/chat/59012291_";
				var mainLink = link2 + link1.substr(31, 40);

				let words = await driver3.wait(until.elementLocated(By.className("dialog-user-text"))).getAttribute("innerText");
				let actionText = await driver3
					.wait(until.elementLocated(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p`)), 15000)
					.getText();
				let book = await driver3.findElements(By.className("btn-icon active"));
				//
				//
				// GET THE NAME
				let Name = await driver3.wait(until.elementsLocated(By.className("chat-head-user-name")), 10000);
				let nameArray = [];
				for (let i of Name) {
					nameArray.push(await i.getText());
				}
				let manName = nameArray[1].toString().split("\n");
				let firstName = manName[0].split(" ");
				//
				//
				//GET THE RANDOM GREET
				let random = Math.floor(Math.random() * Messages.length);
				let random2 = Math.floor(Math.random() * greetings.length);
				//
				//
				//

				// just open a book
				if (book.length > 0) {
					if (actionText.startsWith("You have")) {
						if (!words.startsWith("You sent") && !words.startsWith("You liked") && !msgText.startsWith("You:")) {
							if (!msgArray.includes(msgText)) {
								msgArray.push(msgText);
								player.play("NEWmessage_Victoria.mp3");
								if (chatsArray.indexOf(mainLink) === -1) {
									chatsArray.push(mainLink);

									//open a new tab
									await driver3.executeScript(`window.open("https://${mainLink}",'_blank');`);
									//switch the driver to it....
									await driver3.wait(async () => (await driver3.getAllWindowHandles()).length === tabCount++, 10000);
									const windows = await driver3.getAllWindowHandles();
									windows.forEach(async (handle) => {
										if (handle !== originalWindow) {
											await driver3.switchTo().window(handle);
										}
									});

									// write the message
									await driver3
										.wait(
											until.elementLocated(
												By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea")
											),
											5000
										)
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:)`);
									await driver3.switchTo().window(originalWindow);
									ks.sendCombination(["control", "q"]);
									console.log(msgText);
								}
							}
						}
					}
				} else if (!msgText.startsWith("You sent") && !msgText.startsWith("You liked") && !msgText.startsWith("You:")) {
					if (actionText.startsWith("You have")) {
						if (!msgArray.includes(msgText)) {
							msgArray.push(msgText);
							player.play("NEWmessage_Victoria.mp3");
							if (chatsArray.indexOf(mainLink) === -1) {
								chatsArray.push(mainLink);

								//open a new tab
								await driver3.executeScript(`window.open("https://${mainLink}",'_blank');`);
								//switch the driver to it....
								await driver3.wait(async () => (await driver3.getAllWindowHandles()).length === tabCount++, 10000);
								const windows = await driver3.getAllWindowHandles();
								windows.forEach(async (handle) => {
									if (handle !== originalWindow) {
										await driver3.switchTo().window(handle);
									}
								});

								// write the message
								await driver3
									.wait(
										until.elementLocated(
											By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea")
										),
										5000
									)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${Messages[random]}:)`);
								await driver3.switchTo().window(originalWindow);
								ks.sendCombination(["control", "q"]);
								console.log(msgText);
							}
						}
					}
				}
			}
			await driver3.sleep(9500);
			driver3.navigate().refresh();
		} catch {
			await driver3.actions().sendKeys(Key.F5).perform();
		}
	}
}
