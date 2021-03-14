const { Builder, By, Key, until } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

options.setChromeBinaryPath("d:/SELENIUM/Chrome/Application/chrome.exe");

options.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\Irina_49\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
	"--start-maximized",
]);
options.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver = new Builder().forBrowser("chrome").setChromeOptions(options).build();

getToOnline();

async function getToOnline() {
	let linkList = new Array();
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
			let irinaInvites = [
				"Can u do me a favor?",
				"Is it normal for a lady to order a birthday present from a man?",
				"Do you know how to make a girl happy?",
				"What event should each person experience in life?",
				"How young do you feel yourself?",
				"What are you doing tonight?",
				"Do you have a favorite song?",
				"Does love bring more pain or happiness?",
				"Would you go on a blind date?",
				"If you had the chance to make a movie... What would it be about?",
				"What is your first impression of me?",
				"What is the perfect day for you?",
				"I'm sorry, but are you a real person and you seek your soulmate?",
				"What is the BEST TREAT for YOU?",
				"Do YOU have a FAST CAR?",
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
				"Woman in a short dress…hot or vulgar?",
				"What do you ask if the answer is yes?",
				"Do you think that women only need flowers and gifts?",
			];

			await driver.get("http://***");

			try {
				await driver.findElement(By.xpath("/html/body/div/div[4]/div/div[2]/div[2]/button")).click();
				await driver.sleep(2000);
			} catch {
				// click online button
				await driver.wait(until.elementLocated(By.className("chat-online-icon")), 1000).click();

				// enable scroller window
				await driver.wait(until.elementLocated(By.className("chat-list__in")), 1000).click();
				// scroll to the bottom
				for (let i = 0; i < 10; i++) {
					await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
					await driver.sleep(1000);
				}
				await driver.actions().sendKeys(Key.HOME).perform();
				// player.play("scrollComplete.mp3");
				await driver.sleep(2000);
				//
				let countDiv = 1;
				let count = countDiv;
				let minuscount = 13;
				while (count < minuscount) {
					await driver
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`))
						.click();
					await driver.sleep(2000);
					let text = await driver.findElement(By.className(`chat-field-info-text`)).getText();
					//
					//

					let time = await driver.findElements(By.className("message-text-time"));
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.findElements(By.className("chat-head-user-name"));
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * irinaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);

					//

					let link1 = await driver
						.findElement(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a"))
						.getAttribute("href");

					let link2 = "***/chat/61946985_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//

					try {
						await driver.findElement(By.className("btn-icon active"));
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("chat_irina.mp3");
						}
					} catch {
						if (text.startsWith("You have 1 message")) {
							await driver.findElement(By.className("btn-icon")).click();
						} else if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`)) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						} else if (
							text.startsWith("You have") &&
							!clock.includes("min") &&
							!clock.includes("hour") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						}
					}
					count++;
				}

				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				// wait a bit
				await driver.sleep(500);
				//
				count = 3;
				minuscount = 14;
				while (count < minuscount) {
					await driver
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`))
						.click();
					await driver.sleep(2000);
					let text = await driver.findElement(By.className(`chat-field-info-text`)).getText();
					//
					//

					let time = await driver.findElements(By.className("message-text-time"));
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.findElements(By.className("chat-head-user-name"));
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * irinaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);

					//

					let link1 = await driver
						.findElement(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a"))
						.getAttribute("href");

					let link2 = "***/chat/61946985_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//

					try {
						await driver.findElement(By.className("btn-icon active"));
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("chat_irina.mp3");
						}
					} catch {
						if (text.startsWith("You have 1 message")) {
							await driver.findElement(By.className("btn-icon")).click();
						} else if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`)) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						} else if (
							text.startsWith("You have") &&
							!clock.includes("min") &&
							!clock.includes("hour") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						}
					}
					count++;
				}

				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				// wait a bit
				await driver.sleep(500);
				//
				count = 3;
				minuscount = 14;
				while (count < minuscount) {
					await driver
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`))
						.click();
					await driver.sleep(2000);
					let text = await driver.findElement(By.className(`chat-field-info-text`)).getText();
					//
					//

					let time = await driver.findElements(By.className("message-text-time"));
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.findElements(By.className("chat-head-user-name"));
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * irinaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);

					//

					let link1 = await driver
						.findElement(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a"))
						.getAttribute("href");

					let link2 = "***/chat/61946985_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//

					try {
						await driver.findElement(By.className("btn-icon active"));
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("chat_irina.mp3");
						}
					} catch {
						if (text.startsWith("You have 1 message")) {
							await driver.findElement(By.className("btn-icon")).click();
						} else if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`)) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						} else if (
							text.startsWith("You have") &&
							!clock.includes("min") &&
							!clock.includes("hour") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						}
					}
					count++;
				}

				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				// wait a bit
				await driver.sleep(500);
				//
				count = 3;
				minuscount = 14;
				while (count < minuscount) {
					await driver
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`))
						.click();
					await driver.sleep(2000);
					let text = await driver.findElement(By.className(`chat-field-info-text`)).getText();
					//
					//

					let time = await driver.findElements(By.className("message-text-time"));
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.findElements(By.className("chat-head-user-name"));
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * irinaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);

					//

					let link1 = await driver
						.findElement(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a"))
						.getAttribute("href");

					let link2 = "***/chat/61946985_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//

					try {
						await driver.findElement(By.className("btn-icon active"));
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("chat_irina.mp3");
						}
					} catch {
						if (text.startsWith("You have 1 message")) {
							await driver.findElement(By.className("btn-icon")).click();
						} else if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`)) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						} else if (
							text.startsWith("You have") &&
							!clock.includes("min") &&
							!clock.includes("hour") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						}
					}
					count++;
				}

				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				// wait a bit
				await driver.sleep(500);
				//
				count = 14;
				minuscount = 25;
				while (count < minuscount) {
					await driver
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`))
						.click();
					await driver.sleep(2000);
					let text = await driver.findElement(By.className(`chat-field-info-text`)).getText();
					//
					//

					let time = await driver.findElements(By.className("message-text-time"));
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.findElements(By.className("chat-head-user-name"));
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * irinaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);

					//

					let link1 = await driver
						.findElement(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a"))
						.getAttribute("href");

					let link2 = "***/chat/61946985_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//

					try {
						await driver.findElement(By.className("btn-icon active"));
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("chat_irina.mp3");
						}
					} catch {
						if (text.startsWith("You have 1 message")) {
							await driver.findElement(By.className("btn-icon")).click();
						} else if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`)) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						} else if (
							text.startsWith("You have") &&
							!clock.includes("min") &&
							!clock.includes("hour") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							await driver
								.findElement(By.name("note"))
								.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${irinaInvites[random]}:)`, Key.ENTER);
						}
					}
					count++;
				}

				await driver.actions().sendKeys(Key.F5).perform();
			}
		} catch {
			await driver.actions().sendKeys(Key.F5).perform();
		}
	}
}
