const { Builder, By, Key, until } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

options.setChromeBinaryPath("d:/SELENIUM/Chrome/Application/chrome.exe");

options.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\svitlana_29\\",
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
			let svitlanaInvites = [
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
			];

			await driver.get("http://prime.date");

			try {
				await driver.findElement(By.xpath("/html/body/div/div[4]/div/div[2]/div[2]/button")).click();
				await driver.sleep(2000);
			} catch {
				// click online button
				await driver.wait(until.elementLocated(By.className("chat-online-icon")), 2000).click();

				// enable scroller window
				await driver.wait(until.elementLocated(By.className("chat-list__in")), 2000).click();
				// scroll to the bottom
				for (let i = 0; i < 15; i++) {
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
						.wait(
							until.elementLocated(
								By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`)
							),
							2000
						)
						.click();

					let text = await driver.wait(until.elementLocated(By.className(`chat-field-info-text`)), 2000).getText();
					//
					//

					let time = await driver.wait(until.elementsLocated(By.className("message-text-time")), 2000);
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.wait(until.elementsLocated(By.className("chat-head-user-name")), 2000);
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * svitlanaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					// let linkParent = await driver.wait(until.elementsLocated(By.className("chat-head-user-photo last")), 2000);
					// let link1 = await linkParent.findElements(By.css("a")).getAttribute("href");
					let link1 = await driver
						.wait(until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a")), 2000)
						.getAttribute("href");

					let link2 = "prime.date/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver.wait(until.elementLocated(By.className("btn-icon active")), 2000);
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("CHAT.mp3");
						}
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						} else if (
							text.startsWith("You have") &&
							!clock.includes("hour") &&
							!clock.includes("min") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						}
					}
					count++;
				}
				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				await driver.sleep(1800);

				count = 3;
				minuscount = 14;
				while (count < minuscount) {
					await driver
						.wait(
							until.elementLocated(
								By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`)
							),
							2000
						)
						.click();

					let text = await driver.wait(until.elementLocated(By.className(`chat-field-info-text`)), 2000).getText();
					//
					//

					let time = await driver.wait(until.elementsLocated(By.className("message-text-time")), 2000);
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.wait(until.elementsLocated(By.className("chat-head-user-name")), 2000);
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * svitlanaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					// let linkParent = await driver.wait(until.elementsLocated(By.className("chat-head-user-photo last")), 2000);
					// let link1 = await linkParent.findElements(By.css("a")).getAttribute("href");
					let link1 = await driver
						.wait(until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a")), 2000)
						.getAttribute("href");

					let link2 = "prime.date/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver.wait(until.elementLocated(By.className("btn-icon active")), 2000);
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("CHAT.mp3");
						}
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						} else if (
							text.startsWith("You have") &&
							!clock.includes("hour") &&
							!clock.includes("min") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						}
					}
					count++;
				}
				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				await driver.sleep(1800);

				count = 3;
				minuscount = 14;
				while (count < minuscount) {
					await driver
						.wait(
							until.elementLocated(
								By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`)
							),
							2000
						)
						.click();

					let text = await driver.wait(until.elementLocated(By.className(`chat-field-info-text`)), 2000).getText();
					//
					//

					let time = await driver.wait(until.elementsLocated(By.className("message-text-time")), 2000);
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.wait(until.elementsLocated(By.className("chat-head-user-name")), 2000);
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * svitlanaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					// let linkParent = await driver.wait(until.elementsLocated(By.className("chat-head-user-photo last")), 2000);
					// let link1 = await linkParent.findElements(By.css("a")).getAttribute("href");
					let link1 = await driver
						.wait(until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a")), 2000)
						.getAttribute("href");

					let link2 = "prime.date/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver.wait(until.elementLocated(By.className("btn-icon active")), 2000);
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("CHAT.mp3");
						}
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						} else if (
							text.startsWith("You have") &&
							!clock.includes("hour") &&
							!clock.includes("min") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						}
					}
					count++;
				}
				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				await driver.sleep(1800);

				count = 3;
				minuscount = 14;
				while (count < minuscount) {
					await driver
						.wait(
							until.elementLocated(
								By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`)
							),
							2000
						)
						.click();

					let text = await driver.wait(until.elementLocated(By.className(`chat-field-info-text`)), 2000).getText();
					//
					//

					let time = await driver.wait(until.elementsLocated(By.className("message-text-time")), 2000);
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.wait(until.elementsLocated(By.className("chat-head-user-name")), 2000);
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * svitlanaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					// let linkParent = await driver.wait(until.elementsLocated(By.className("chat-head-user-photo last")), 2000);
					// let link1 = await linkParent.findElements(By.css("a")).getAttribute("href");
					let link1 = await driver
						.wait(until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a")), 2000)
						.getAttribute("href");

					let link2 = "prime.date/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver.wait(until.elementLocated(By.className("btn-icon active")), 2000);
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("CHAT.mp3");
						}
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						} else if (
							text.startsWith("You have") &&
							!clock.includes("hour") &&
							!clock.includes("min") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						}
					}
					count++;
				}
				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				await driver.sleep(1800);

				count = 14;
				minuscount = 25;
				while (count < minuscount) {
					await driver
						.wait(
							until.elementLocated(
								By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`)
							),
							2000
						)
						.click();

					let text = await driver.wait(until.elementLocated(By.className(`chat-field-info-text`)), 2000).getText();
					//
					//

					let time = await driver.wait(until.elementsLocated(By.className("message-text-time")), 2000);
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.wait(until.elementsLocated(By.className("chat-head-user-name")), 2000);
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * svitlanaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					// let linkParent = await driver.wait(until.elementsLocated(By.className("chat-head-user-photo last")), 2000);
					// let link1 = await linkParent.findElements(By.css("a")).getAttribute("href");
					let link1 = await driver
						.wait(until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a")), 2000)
						.getAttribute("href");

					let link2 = "prime.date/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver.wait(until.elementLocated(By.className("btn-icon active")), 2000);
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("CHAT.mp3");
						}
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						} else if (
							text.startsWith("You have") &&
							!clock.includes("hour") &&
							!clock.includes("min") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						}
					}
					count++;
				}
				await driver.actions().sendKeys(Key.PAGE_DOWN).perform();
				await driver.sleep(1800);

				count = 24;
				minuscount = 30;
				while (count < minuscount) {
					await driver
						.wait(
							until.elementLocated(
								By.xpath(`/html/body/div[1]/section/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]/div`)
							),
							2000
						)
						.click();

					let text = await driver.wait(until.elementLocated(By.className(`chat-field-info-text`)), 2000).getText();
					//
					//

					let time = await driver.wait(until.elementsLocated(By.className("message-text-time")), 2000);
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver.wait(until.elementsLocated(By.className("chat-head-user-name")), 2000);
					let nameArray = [];
					for (let i of Name) {
						nameArray.push(await i.getText());
					}
					let manName = nameArray[1].toString().split("\n");
					let firstName = manName[0].split(" ");

					let random = Math.floor(Math.random() * svitlanaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					// let linkParent = await driver.wait(until.elementsLocated(By.className("chat-head-user-photo last")), 2000);
					// let link1 = await linkParent.findElements(By.css("a")).getAttribute("href");
					let link1 = await driver
						.wait(until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div/div[2]/div/div[1]/div/div[3]/a")), 2000)
						.getAttribute("href");

					let link2 = "prime.date/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver.wait(until.elementLocated(By.className("btn-icon active")), 2000);
						if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							linkList.push(mainLink);
							// await driver.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("CHAT.mp3");
						}
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
						} else if (
							text.startsWith("You have") &&
							!clock.includes("hour") &&
							!clock.includes("min") &&
							!clock.includes("sec") &&
							!clock.includes("just now")
						) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver
									.wait(until.elementLocated(By.name("note")), 2000)
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver.sleep(1400);
							}
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
