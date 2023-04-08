export function rps(user) {
		let res = new Object();
    const wins = [
		   ['scissors', 'paper'],
			 ['paper', 'rock'],
			 ['rock', 'scissors'],
		];
		const choices = ["rock", "paper", "scissors"];
    let other = choices[Math.floor(Math.random() * 3)];

    if (user == null) {
        res.player = other;
        return res;
    }

    res.player = user;
    res.opponent = other;
		res.result = "tie";
    
		const p1 = [user, other];
		const p2 = [other, user];
		
		for (let win of wins) {
			if (p1.toString() === win.toString()) {
				res.result = "win";
			}
			else if (p2.toString() === win.toString()) {
				res.result = "lose";
			}
		}

    return res;
}

export function rpsls(user) {
		let res = new Object();
    const wins = [
		   ['scissors', 'paper'],
			 ['paper', 'rock'],
			 ['rock', 'scissors'],
			 ['rock', 'lizard'],
			 ['lizard', 'spock'],
			 ['spock', 'scissors'],
			 ['scissors', 'lizard'],
			 ['lizard', 'paper'],
			 ['paper', 'spock'],
			 ['spock', 'rock']
		];
		const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let other = choices[Math.floor(Math.random() * 5)];

    if (user == null) {
        res.player = other;
        return res;
    }

    res.player = user;
    res.opponent = other;
		res.result = "tie";
    
		const p1 = [user, other];
		const p2 = [other, user];
		
		for (let win of wins) {
			if (p1.toString() === win.toString()) {
				res.result = "win";
			}
			else if (p2.toString() === win.toString()) {
				res.result = "lose";
			}
		}

    return res;
}