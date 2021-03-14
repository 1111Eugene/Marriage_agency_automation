const { Builder, By, Key, until } = require("selenium-webdriver");
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

const driver4 = new Builder().forBrowser("chrome").setChromeOptions(options).build();

Active_newMessage();

async function Active_newMessage() {
	let chatsArray = new Array();
	let greetings = ["Hello", "Hi", "Good day", "Bonjour", "Greetings", "Aloha", "Buenos dias", "Buenas noches"];

	let Messages = [
		"Nice to meet you:) Could you tell me some random fun facts about you?",
		"How is your day?",
		"May I ask if you do know any good jokes?",
		"What's up?",
		"How are you?",
		"What's happening?",
		"What's up?:) Where are you from originally?",
		"What's happening?:) mmmmm.... Do you kiss on a first date?",
		"Do you plan to have kids?",
		"What are you? Do you like your job?",
		"Have you been working out?",
		"mmm.. may I ask right away? What is your biggest fantasy?",
		"mmm.. may I ask right away? What is your biggest obsession?",
		"What is your first impression about me, and do first impressions matter to you?",
		"Are you having a good time?",
		"How are you?:) I wanna know everything about you:) Please....",
		"How are you spending your day?",
		"What drew you to my profile?",
		"What are you looking for in a relationship?",
	];
	await driver4.get("http://***");
	for (;;) {
		try {
			// login if needed
			await driver4.findElement(By.xpath("/html/body/div/div[4]/div/div[2]/div[2]/button")).click();
			await driver4.sleep(3000);
		} catch {
			await driver4.sleep(3000);
			let dialog = await driver4.findElement(By.className("dialog-item is-active"));
			// dialog.click();
			// link
			// last message author
			let msgText = await dialog.findElement(By.className("dialog-user-text")).getAttribute("innerText");

			let link1 = await driver4.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[1]/div/div[3]/a`)).getAttribute("href");
			let link2 = "***/chat/63118825_";
			var mainLink = link2 + link1.substr(31, 40);

			let words = await driver4.wait(until.elementLocated(By.className("dialog-user-text"))).getAttribute("innerText");
			let actionText = await driver4.findElement(By.xpath(`/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[1]/div[2]/p`)).getText();
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
			console.log(msgText);
			// just open a book
			if (book.length > 0) {
				if (actionText.startsWith("You have")) {
					if (chatsArray.indexOf(mainLink) === -1) {
						chatsArray.push(mainLink);
						if (!words.startsWith("You sent") && !words.startsWith("You liked")) {
							await driver4.executeScript(`window.open("https://${mainLink}",'_blank');`);
							player.play("NEWmessage_Alla.mp3");
						}
					}
				}
			} else if (!msgText.startsWith("You sent") && !msgText.startsWith("You liked")) {
				if (actionText.startsWith("You have")) {
					if (chatsArray.indexOf(mainLink) === -1) {
						chatsArray.push(mainLink);
						// if (!words.startsWith("You sent") && !words.startsWith("You liked")) {

						let theMessage = await driver4
							.wait(
								until.elementLocated(By.xpath("/html/body/div[1]/section/div/div/div[2]/div/div[2]/div/div[2]/div[1]/div/textarea")),
								5000
							)
							.sendKeys(`${greetings[random2]} ${firstName[0]}!:) ${Messages[random]}:)`);
						theMessage.select();
						await driver4.executeScript(`document.execCommand('copy');`);

						await driver4.sleep(1400);
						await driver4.executeScript(`window.open("https://${mainLink}",'_blank');`);
						player.play("success.mp3");
						// }
					}
				}
			}
		}
		await driver4.sleep(9500);
		driver4.navigate().refresh();
	}
}
