const { Builder, By, Key, until } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
const ks = require("node-key-sender");
ks.setOption("globalDelayPressMillisec", 1000);

options.setChromeBinaryPath("d:/SELENIUM/Chrome/Application/chrome.exe");

options.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\yuliia_Messages_1\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
	"--start-maximized",
]);
options.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver4 = new Builder().forBrowser("chrome").setChromeOptions(options).build();

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
				"Can u do me a favor?",
				"Are you looking for a serious relationship or just communication?",
				"Want to see a surprise?",
				"What qualities should a perfect woman have?",
				"Give or take?",
				"Do you wear underwear?",
				"Does this feels like a prison here?",
				"Kalach? Do you know what it is?",
				"Every American wants to try 2 things -  a UKRAINIAN WOMAN and BORSCH ...true?",
				"Are you real?",
				"Should a woman give in to a man? ",
				"Would you dare to steal? Want to steal a girl?",
				"How often should a person laugh and how often do you do it?",
				"What is your first impression of me?",
				"Do you agree with the statement that the one who does not take risks does not drink champagne?",
				"I'm sorry, but are you a real person and you seek your soulmate?",
				"FATE!! She sometimes sends us severe tests, the main thing is not to lose heart. I think she also prepared a lot of gifts for us .. Agree?",
				"Would you come to Ukraine to visit your girlfriend?",
				"DO YOU find ME attractive?",
				"So...what drew you to my profile?",
				"mmm... May I ask right away? What is your biggest fantasy?",
				"mmm... May I ask right away? What is your biggest obsession?",
				"...What is your first impression about me?",
				"Are you having a good time?",
				"How are you?:) I want to know everything about you:)",
				"What are you looking for in a relationship?",
				"...Do you have a dream you're pursuing?",
				"Would you share with me your biggest passion?",
				"What are you passionate about?",
				"What's happening?:) mmmmm.... Do you kiss on a first date?",
				"Can we talk about personal topics?",
				"A romantic dinner in a restaurant or outdoor activities?",
				"I want to ask you something, but I'm afraid you will ignore me. Will you answer me?",
			];
			await driver4.get("http://***");
			const originalWindow = await driver4.getWindowHandle();

			try {
				// login if needed
				await driver4.findElement(By.xpath("/html/body/div/div[4]/div/div[2]/div[2]/button")).click();
				await driver4.sleep(3000);
			} catch {
				await driver4.sleep(2000);
				await driver4.findElement(By.className("dialog-item")).click();

				// last message text
				await driver4.sleep(3000);
				let msgText = await driver4.findElement(By.className("dialog-user-text")).getAttribute("innerText");

				let link1 = await driver4
					.findElement(By.xpath(`/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a`))
					.getAttribute("href");
				let link2 = "***/chat/61699715_";
				var mainLink = link2 + link1.substr(31, 40);

				let words = await driver4.findElement(By.className("dialog-user-text")).getAttribute("innerText");
				let actionText = await driver4
					.findElement(By.xpath(`/html/body/div[1]/section/div/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p`))
					.getText();
				// check if book
				let book = await driver4.findElements(By.className("btn-icon active"));
				//
				//
				// GET THE NAME
				let Name = await driver4.findElements(By.className("chat-head-user-name"));
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
								player.play("NEWmessage_yuliia.mp3");
								if (chatsArray.indexOf(mainLink) === -1) {
									chatsArray.push(mainLink);

									//open a new tab
									await driver4.executeScript(`window.open("https://${mainLink}",'_blank');`);
									//switch the driver4 to it....
									await driver4.wait(async () => (await driver4.getAllWindowHandles()).length === tabCount++, 10000);
									const windows = await driver4.getAllWindowHandles();
									windows.forEach(async (handle) => {
										if (handle !== originalWindow) {
											await driver4.switchTo().window(handle);
										}
									});

									// write the message
									await driver4
										.wait(until.elementLocated(By.name("note"), 10000))
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:)`);
									await driver4.switchTo().window(originalWindow);
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
							player.play("NEWmessage_yuliia.mp3");
							if (chatsArray.indexOf(mainLink) === -1) {
								chatsArray.push(mainLink);

								//open a new tab
								await driver4.executeScript(`window.open("https://${mainLink}",'_blank');`);
								//switch the driver4 to it....
								await driver4.wait(async () => (await driver4.getAllWindowHandles()).length === tabCount++, 10000);
								const windows = await driver4.getAllWindowHandles();
								windows.forEach(async (handle) => {
									if (handle !== originalWindow) {
										await driver4.switchTo().window(handle);
									}
								});

								// write the message
								await driver4
									.wait(until.elementLocated(By.name("note"), 10000))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${Messages[random]}:)`);
								await driver4.switchTo().window(originalWindow);
								ks.sendCombination(["control", "q"]);
								console.log(msgText);
							}
						}
					}
				}
			}
			await driver4.sleep(9500);
			driver4.navigate().refresh();
		} catch {
			await driver4.actions().sendKeys(Key.F5).perform();
		}
	}
}
