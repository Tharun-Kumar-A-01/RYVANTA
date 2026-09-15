export const REGISTRATION_CLOSES_AT = "2026-09-15T15:00:00";
export const EVENT_STARTS_AT = "2026-09-19T09:00:00";

export const EVENTS = [
	{
		id: "hackathon",
		index: 1,
		name: "Hackathon",
		fullName: "Hackathon",
		tagline: "Eight hours, one working prototype, judged on the build.",
		venue: "Auditorium",
		fee: 100,
		memberCounts: [2, 3],
		domains: [
			"Artificial Intelligence & Machine Learning",
			"IoT & Smart Automation",
			"Cybersecurity & Digital Safety",
			"Computer Vision & Image Processing",
			"Healthcare & Smart Health",
			"Smart Agriculture & Farming",
			"Smart Transportation & Mobility",
		],
		rules: [
			"Teams must consist of 2-3 members.",
			"The Problem Statement will be released via email before the event.",
			"Teams must develop their prototype based on the given problem statement.",
			"Teams must bring the completed prototype for evaluation.",
			"Teams must prepare a Spot PPT during the event.",
			"Teams must bring their own laptops and chargers.",
			"The decision of the judges/organizers is final and binding.",
			"Teams must report on time, repeated late arrival may affect evaluation.",
		],
		agenda: [
			{
				time: "08:30 AM - 10:00 AM",
				task: "Inauguration",
			},
			{
				time: "10:00 AM - 11:30 AM",
				task: "Mentor Review",
			},
			{
				time: "11:30 AM - 12:30 PM",
				task: "Live Modification / Upgrade",
			},
			{
				time: "12:30 PM - 01:00 PM",
				task: "Lunch Break",
			},
			{
				time: "01:00 PM - 02:00 PM",
				task: "Live Modification / Upgrade",
			},
			{
				time: "02:00 PM - 03:00 PM",
				task: "PPT Preparation",
			},
			{
				time: "03:00 PM - 03:30 PM",
				task: "Final Presentation & Demo",
			},			
			{
				time: "03:30 PM - 04:00 PM",
				task: "Prize Distribution",
			},
		],
		prize: [
			{ place: "1st Prize", amount: "5,000" },
			{ place: "2nd Prize", amount: "3,000" },
		],
	},
	{
		id: "games2d",
		index: 2,
		name: "2D Game Development",
		fullName: "2D Game Development",
		tagline: "Ship a playable 2D game from a themed domain prompt.",
		venue: "HPC Lab",
		fee: 100,
		memberCounts: [2, 3],
		domains: [
			"Cyber Detective",
			"Disaster Resources",
			"Puzzle",
			"Endless Runner",
			"Farming",
			"Space Adventure",
			"Logics",
			"Racing",
			"2D Combats",
			"Eco – City",
		],
		rules: [
			"Bring your own laptop — compulsory.",
			"Choose your own technology, engine and programming language.",
			"The game must be developed during the official 2-hour period.",
			"Previously completed/substantially pre-developed games are not allowed.",
			"Participation is team-based.",
			"Each team must ensure that its laptop is fully charged and has the required development environment installed before the event.",
			"After submission/deadline, no modification is permitted.",
			"The winner is determined using the published 100-point judging criteria, not personal preference.",
			"Each team must select ONE domain from the official list of 10 domains.",
			"A domain can be selected by more than one team.",
			"Teams are free to develop their own game concept within the selected domain.",
			"The selected domain must have a meaningful connection to the gameplay.",
			"Teams cannot change their domain after the development period has started, except with explicit permission from the coordinator in case of an organizational error.",
		],
		agenda: [
			{
				time: "08:30 AM - 10:00 AM",
				task: "Inauguration",
			},
			{
				time: "10:00 AM - 10:10 AM",
				task: "Check-in and Rules Briefing",
			},
			{
				time: "10:10 AM - 11:10 AM",
				task: "Development 1",
			},
			{
				time: "11:10 AM - 11:25 AM",
				task: "Break",
			},
			{
				time: "11:25 AM - 12:40 PM",
				task: "Development 2",
			},
		],
		prize: [
			{ place: "1st Prize", amount: "3,000" },
			{ place: "2nd Prize", amount: "2,000" },
		],
	},
	{
		id: "ctf",
		index: 3,
		name: "Capture The Flag",
		fullName: "Capture The Flag - CTF",
		tagline:
			"The system has vulnerabilities. Your mission is to find them.",
		venue: "IT Lab",
		fee: 100,
		memberCounts: [2, 3],
		rules: [
			"Teams must consist of 2-3 members.",
			"Participants must bring their own laptops.",
			"There will be 2 rounds with 2 flags to capture.",
			"The first to submit the flag tops the leaderboard.",
			"Final winners are calculated on total points taken.",
			"Any form of DoS or attacks on the scoring infrastructure is strictly forbidden.",
			"Flags must be submitted in the specified format.",
			"You can use any operating system you prefer.",
			"Sharing flags or hints with other teams is prohibited.",
		],
		agenda: [
			{ time: "08:30 AM - 10:00 AM", task: "Inauguration" },
			{
				time: "10:00 AM - 10:15 AM",
				task: "Check-in and Rules Briefing",
			},
			{ time: "10:15 AM - 11:30 AM", task: "Round 1" },
			{ time: "11:30 AM - 11:45 AM", task: "Break" },
			{ time: "11:45 AM - 01:00 PM", task: "Round 2" },
		],
		prize: [
			{ place: "1st Prize", amount: "3,000" },
			{ place: "2nd Prize", amount: "2,000" },
		],
	},
];

export function getEvent(id) {
	return EVENTS.find((event) => event.id === id) ?? EVENTS[0];
}

export const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

export const SUPPORT_LINES = [
	{
		label: "Registration desk",
		number: "+91 95665 42006",
		tel: "+919566542006",
	},
	{
		label: "Event coordination",
		number: "+91 90030 18088",
		tel: "+919003018088",
	},
];
