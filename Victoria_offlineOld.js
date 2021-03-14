const { Builder, By, Key } = require("selenium-webdriver");
const player = require("play-sound")((opts = { player: "cmdmp3" }));
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();

options.setChromeBinaryPath("d:/SELENIUM/Chrome/Application/chrome.exe");

options.addArguments([
	"--user-data-dir=d:\\SELENIUM\\Girls\\Victoria_39_Offline\\",
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
	];
	let victoriaInvites = [
		"Is it true that men don't like petite women?",
		"Natural beauty or ....... ? What do you want to see in the morning?",
		"Can u do me a favor?",
		"Do you like strong women that can stand for themselves?",
		"Is it normal for a lady to order a birthday present from a man?",
		"Should a girl take money for beauty salons from her man?",
		"How to make a girl happy?",
		"What was your worst date ever?",
		"What event should each person experience in life?",
		"How young do you feel yourself?",
		"Hоw wоuld yоu dеscribе yоursеlf in three wоrds?",
		"What are you doing tonight?",
		"How many languages do you know?",
		"Do you believe in supernatural beings?",
		"Do you have a favorite song?",
		"Do you wake up early or like to sleep a little longer?",
		"Does love bring more pain or happiness?",
		"Do you have lots of money?",
		"Would you go on a blind date?",
		"If you had the chance to make a movie... What would it be about?",
		"Is it hard for you to share your feelings with others?",
		"What is your first impression of me?",
		"What is the perfect day for you?",
		"I'm sorry, but are you a real person and you seek your soulmate?",
		"What has been the best day of your life so far?",
		"What is the BEST TREAT for YOU?",
		"Do YOU have a FAST CAR?",
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

					let random = Math.floor(Math.random() * victoriaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					let link1 = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
						.getAttribute("href");
					let link2 = "***/chat/59012291_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver2.findElement(By.className("btn-icon active"));
						// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
						// 	linkList.push(mainLink);
						// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
						// 	player.play("CHAT_Victoria.mp3");
						// }
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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

						let random = Math.floor(Math.random() * victoriaInvites.length);
						let random2 = Math.floor(Math.random() * greetings.length);
						//
						//

						let link1 = await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
							.getAttribute("href");
						let link2 = "***/chat/59012291_";
						var mainLink = link2 + link1.substr(31, 40);
						//
						//
						try {
							await driver2.findElement(By.className("btn-icon active"));
							// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							// 	linkList.push(mainLink);
							// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
							// 	player.play("CHAT_Victoria.mp3");
							// }
						} catch {
							if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
								if (linkList.indexOf(mainLink) === -1) {
									linkList.push(mainLink);

									await driver2
										.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
			let minuscount = 25;
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

					let random = Math.floor(Math.random() * victoriaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					let link1 = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
						.getAttribute("href");
					let link2 = "***/chat/59012291_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver2.findElement(By.className("btn-icon active"));
						// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
						// 	linkList.push(mainLink);
						// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
						// 	player.play("CHAT_Victoria.mp3");
						// }
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
								await driver2.sleep(1400);
							}
						}
					}
				}
				count += 2;
			}
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1800);

			count = 20;
			minuscount = 25;
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

					let random = Math.floor(Math.random() * victoriaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					let link1 = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
						.getAttribute("href");
					let link2 = "***/chat/59012291_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver2.findElement(By.className("btn-icon active"));
						// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
						// 	linkList.push(mainLink);
						// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
						// 	player.play("CHAT_Victoria.mp3");
						// }
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
								await driver2.sleep(1400);
							}
						}
					}
				}
				count += 2;
			}
			// await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			// await driver2.sleep(1800);
			count = 25;
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

					let random = Math.floor(Math.random() * victoriaInvites.length);
					let random2 = Math.floor(Math.random() * greetings.length);
					//
					//

					let link1 = await driver2
						.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
						.getAttribute("href");
					let link2 = "***/chat/59012291_";
					var mainLink = link2 + link1.substr(31, 40);
					//
					//
					try {
						await driver2.findElement(By.className("btn-icon active"));
						// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
						// 	linkList.push(mainLink);
						// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
						// 	player.play("CHAT_Victoria.mp3");
						// }
					} catch {
						if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
							if (linkList.indexOf(mainLink) === -1) {
								linkList.push(mainLink);

								await driver2
									.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
									.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
								await driver2.sleep(1400);
							}
						}
					}
				}
				count++;
			}
			await driver2.actions().sendKeys(Key.PAGE_DOWN).perform();
			await driver2.sleep(1800);

			for (i = 0; i < 400; i++) {
				count = 21;
				minuscount = 32;
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

						let random = Math.floor(Math.random() * victoriaInvites.length);
						let random2 = Math.floor(Math.random() * greetings.length);
						//
						//

						let link1 = await driver2
							.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`))
							.getAttribute("href");
						let link2 = "***/chat/59012291_";
						var mainLink = link2 + link1.substr(31, 40);
						//
						//
						try {
							await driver2.findElement(By.className("btn-icon active"));
							// if (linkList.indexOf(mainLink) === -1 && text.startsWith("You have")) {
							// 	linkList.push(mainLink);
							// 	await driver2.executeScript(`window.open("https://${mainLink}",'_blank');`);
							// 	player.play("CHAT_Victoria.mp3");
							// }
						} catch {
							if (text.startsWith("You have") && clock.includes(`${clockArray[0] >= 10 && "hours"}`) && !clock.includes("min")) {
								if (linkList.indexOf(mainLink) === -1) {
									linkList.push(mainLink);

									await driver2
										.findElement(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea"))
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
										.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${victoriaInvites[random]}:)`, Key.ENTER);
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
