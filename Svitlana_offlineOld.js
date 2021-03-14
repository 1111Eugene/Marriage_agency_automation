const { Builder, By, Key } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

options.setChromeBinaryPath("d:/SELENIUM/Chrome/Application/chrome.exe");

options.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\Svitlana_29_offline\\",
	"--profile-directory=Profile 4",
	"--suppress-message-center-popups",
	"--log-level=3",
	"--disable-logging",
	"--start-maximized",
]);
options.excludeSwitches(["enable-automation", "enable-infobars", "restore-last-session"]);

const driver2 = new Builder().forBrowser("chrome").setChromeOptions(options).build();

getToOnline();

async function getToOnline() {
	let linkList = new Array();
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

	await driver2.get("http://***");

	try {
		await driver2.findElement(By.xpath("/html/body/div/div[4]/div/div[2]/div[2]/button")).click();
		await driver2.sleep(3000);
	} catch {
		await driver2.sleep(2000);
		await driver2.findElement(By.xpath("/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]")).click();

		// scroll to the bottom
		for (let i = 0; i < 20; i++) {
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1000);
			await driver2.actions().sendKeys(Key.PAGE_UP).perform();
			await driver2.sleep(1000);
		}
		await driver2.actions().sendKeys(Key.HOME).perform();
		player.play("scrollComplete.mp3");
		await driver2.sleep(3000);
		//
		try {
			let countDiv = 1;
			let count = countDiv;
			let minuscount = 13;
			while (count < minuscount) {
				let element = await driver2.findElement(
					By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`)
				);

				if (element !== undefined) {
					await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`))
						.click();

					await driver2.sleep(1400);

					let text = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p`))
						.getText();
					//
					//
					let time = await driver2.findElements(By.className("message-text-time"));
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver2.findElements(By.className("chat-head-user-name"));
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

					let link1 = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
						.getAttribute("href");
					let link2 = "***/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver2.findElement(By.className("btn-icon active"));
						// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
						// 	linkList.push(mainLink);
						// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
						// 	player.play("CHAT_svitlana.mp3");
						// }
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver2.sleep(1400);
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

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver2.sleep(1400);
							}
						}
					}
				}
				count++;
			}
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1800);

			for (i = 0; i < 150; i++) {
				count = 7;
				minuscount = 19;
				while (count < minuscount) {
					let element = await driver2.findElement(
						By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`)
					);

					if (element !== undefined) {
						await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`))
							.click();

						await driver2.sleep(1400);

						let text = await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p`))
							.getText();
						//
						//
						let time = await driver2.findElements(By.className("message-text-time"));
						for (let e of time) {
							var clock = await e.getText();
						}
						var clockArray = clock.split(" ");
						//
						//
						let Name = await driver2.findElements(By.className("chat-head-user-name"));
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

						let link1 = await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
							.getAttribute("href");
						let link2 = "***/chat/60544107_";
						var mainLink = link2 + link1.substr(31, 40);
						//
						//
						try {
							await driver2.findElement(By.className("btn-icon active"));
							// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							// 	linkList.push(mainLink);
							// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
							// 	player.play("CHAT_svitlana.mp3");
							// }
						} catch {
							if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
								if (linkList.indexOf(mainLink) === -1) {
									linkList.push(mainLink);

									await driver2
										.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
									await driver2.sleep(1400);
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

									await driver2
										.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
									await driver2.sleep(1400);
								}
							}
						}
					}
					count++;
				}
				await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
				await driver2.sleep(1800);
			}
			player.play("success.mp3");
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
			//
		} catch {
			await driver2.actions().sendKeys(Key.HOME).perform();
			await driver2.sleep(1800);
			let countDiv = 2;
			let count = countDiv;
			let minuscount = 34;
			while (count < minuscount) {
				let element = await driver2.findElement(
					By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`)
				);

				if (element !== undefined) {
					await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`))
						.click();

					await driver2.sleep(1400);

					let text = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p`))
						.getText();
					//
					//
					let time = await driver2.findElements(By.className("message-text-time"));
					for (let e of time) {
						var clock = await e.getText();
					}
					var clockArray = clock.split(" ");
					//
					//
					let Name = await driver2.findElements(By.className("chat-head-user-name"));
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

					let link1 = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
						.getAttribute("href");
					let link2 = "***/chat/60544107_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver2.findElement(By.className("btn-icon active"));
						// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
						// 	linkList.push(mainLink);
						// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
						// 	player.play("CHAT_svitlana.mp3");
						// }
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver2.sleep(1400);
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

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
								await driver2.sleep(1400);
							}
						}
					}
				}
				count += 2;
			}
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1800);

			for (i = 0; i < 150; i++) {
				count = 22;
				minuscount = 33;
				while (count < minuscount) {
					let element = await driver2.findElement(
						By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`)
					);

					if (element !== undefined) {
						await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[${count}]`))
							.click();

						await driver2.sleep(1400);

						let text = await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p`))
							.getText();
						//
						//
						let time = await driver2.findElements(By.className("message-text-time"));
						for (let e of time) {
							var clock = await e.getText();
						}
						var clockArray = clock.split(" ");
						//
						//
						let Name = await driver2.findElements(By.className("chat-head-user-name"));
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

						let link1 = await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
							.getAttribute("href");
						let link2 = "***/chat/60544107_";
						var mainLink = link2 + link1.substr(31, 40);
						//
						//
						try {
							await driver2.findElement(By.className("btn-icon active"));
							// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							// 	linkList.push(mainLink);
							// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
							// 	player.play("CHAT_svitlana.mp3");
							// }
						} catch {
							if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
								if (linkList.indexOf(mainLink) === -1) {
									linkList.push(mainLink);

									await driver2
										.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
									await driver2.sleep(1400);
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

									await driver2
										.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${svitlanaInvites[random]}:)`, Key.ENTER);
									await driver2.sleep(1400);
								}
							}
						}
					}
					count++;
				}
				await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
				await driver2.sleep(1800);
			}
			player.play("done.mp3");
		}
	}
}
