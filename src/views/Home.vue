<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import {
	ArrowRightIcon,
	MapPinIcon,
	ZapIcon,
	ShieldCheckIcon,
	TrophyIcon,
	Gamepad2Icon,
	TerminalIcon,
	FlameIcon,
	SparklesIcon,
} from "lucide-vue-next";
import CountdownCard from "../components/CountdownCard.vue";
// import ScheduleTimeline from "../components/ScheduleTimeline.vue";
import {
	EVENTS,
	EVENT_STARTS_AT,
	REGISTRATION_CLOSES_AT,
} from "../data/events";

const REGISTRATION_FEE = 100;

function scrollToEvents() {
	const el = document.getElementById("events-lineup");
	if (el) el.scrollIntoView({ behavior: "smooth" });
}

const getIconForEvent = (id) => {
	const icons = {
		hackathon: TrophyIcon,
		games2d: Gamepad2Icon,
		ctf: TerminalIcon,
	};
	return icons[id] || TrophyIcon;
};

const getEventThemeClass = (id) => {
	const classes = {
		hackathon: "theme-hackathon",
		games2d: "theme-games",
		ctf: "theme-ctf",
	};
	return classes[id] || "theme-hackathon";
};
</script>

<template>
	<div class="home-container">
		<!-- HERO SECTION -->
		<section class="hero-section">
			<div class="hero-content">
				<div class="hero-badge">
					<span>Tech Innovation Challenge</span>
				</div>

				<h1 class="hero-title">
					RYVANTA
					<span class="text-brand">'26</span>
				</h1>

				<p class="hero-desc">
					Mark your calendars. RYVANTA '26 is here!
					<span class="text-bold">19 September 2026</span> at Jaya
					Engineering College. Just
					<span class="text-brand-bold">₹{{ REGISTRATION_FEE }}</span>
					per person gets you in the game. Compete, Innovate, and Win!
				</p>

				<!-- Key Value Badges -->
				<div class="key-values-container">
					<span class="key-value-item">
						<TrophyIcon class="key-value-icon" />
						{{ EVENTS.length }} Technical Arenas
					</span>
					<span class="key-value-item">
						<ZapIcon class="key-value-icon" />
						₹{{ REGISTRATION_FEE }} Per Person Entry
					</span>
				</div>

				<!-- Action CTAs -->
				<div class="hero-actions">
					<button
						@click="scrollToEvents"
						class="btn-primary hero-btn"
					>
						<span>Register Your Team</span>
						<ArrowRightIcon class="btn-icon-right" />
					</button>

					<RouterLink to="/support" class="btn-secondary hero-btn">
						<span>Helpline &amp; Support</span>
					</RouterLink>
				</div>
			</div>

			<!-- Countdowns -->
			<div class="countdowns-container">
				<CountdownCard
					label="No more registrations accepted."
					:target="REGISTRATION_CLOSES_AT"
					caption="Registration Deadline: 15 September 2026, 3:00 PM IST"
					completeLabel="Registration closed"
					:emphasis="true"
				/>

				<CountdownCard
					label="Challenge Commences In"
					:target="EVENT_STARTS_AT"
					caption="Reporting Time: 19 September 2026, 08:30 AM IST (All Main Events)"
					completeLabel="Live today"
				/>
			</div>
		</section>

		<!-- EVENT SCHEDULE COMPONENT -->
		<!-- <ScheduleTimeline /> -->

		<!-- DIGITAL POSTER CARDS -->
		<section
			id="events-lineup"
			class="lineup-section"
			aria-labelledby="lineup-heading"
		>
			<div class="lineup-header">
				<div>
					<span class="lineup-subtitle"> Technical Arenas </span>
					<h2 id="lineup-heading" class="lineup-title">
						Event <span class="text-brand">Lineup</span>
					</h2>
				</div>
				<span class="lineup-count-badge">
					{{ EVENTS.length }} Flagship Events
				</span>
			</div>

			<div class="events-grid">
				<RouterLink
					v-for="event in EVENTS"
					:key="event.id"
					:to="{ name: 'register', query: { event: event.id } }"
					class="event-card group"
				>
					<div>
						<div class="event-card-title-group">
							<div
								class="event-icon-wrapper"
								:class="getEventThemeClass(event.id)"
							>
								<component
									:is="getIconForEvent(event.id)"
									class="event-icon"
								/>
							</div>
							<h3 class="event-title">
								{{ event.fullName }}
							</h3>
						</div>

						<p class="event-desc">
							{{ event.tagline }}
						</p>
					</div>
					<div class="event-prizes" v-if="event.prize">
						<div
							v-for="prize in event.prize"
							:key="prize.place"
							class="prize-badge"
						>
							<div class="prize-place">{{ prize.place }}</div>
							<div class="prize-amount">₹{{ prize.amount }}</div>
						</div>
					</div>
					<span class="event-team-size">
						{{
							`${event.memberCounts[0]}/${event.memberCounts[1]} Members`
						}}
					</span>

					<div class="event-card-footer">
						<span class="event-venue">
							<MapPinIcon class="event-venue-icon" />
							{{ event.venue }}
						</span>

						<span class="event-action">
							<span>Register</span>
							<ArrowRightIcon class="event-action-icon" />
						</span>
					</div>
				</RouterLink>
			</div>
		</section>
	</div>
</template>

<style scoped>
.home-container {
	display: flex;
	flex-direction: column;
	gap: 5rem;
	padding: 1rem 0;
}

/* HERO SECTION */
.hero-section {
	position: relative;
	display: grid;
	gap: 2.5rem;
	padding-top: 1.5rem;
}

@media (min-width: 1024px) {
	.hero-section {
		grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
		align-items: center;
		gap: 3.5rem;
	}
}

.hero-content {
	position: relative;
	z-index: 10;
}

.hero-badge {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	border-radius: var(--radius-full);
	border: 1px solid var(--brand-blue);
	background-color: var(--bg-primary);
	padding: 0.375rem 1rem;
	font-family: var(--font-mono);
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: var(--brand-blue-hover);
	box-shadow: var(--shadow-sm);
}

.hero-badge-icon {
	width: 0.875rem;
	height: 0.875rem;
	color: var(--brand-blue);
}

.hero-title {
	margin-top: 1.25rem;
	font-family: var(--font-serif, var(--font-sans));
	font-size: 3rem;
	font-weight: 900;
	line-height: 1.08;
	letter-spacing: -0.025em;
	color: var(--text-primary);
}

@media (min-width: 640px) {
	.hero-title {
		font-size: 3.75rem;
	}
}
@media (min-width: 1024px) {
	.hero-title {
		font-size: 4.5rem;
	}
}

.text-brand {
	color: var(--brand-blue);
}
.text-bold {
	font-weight: 700;
	color: var(--text-primary);
}
.text-brand-bold {
	font-weight: 700;
	color: var(--brand-blue);
}

.hero-desc {
	margin-top: 1.5rem;
	max-width: 36rem;
	font-size: 1rem;
	line-height: 1.6;
	color: var(--text-secondary);
}

@media (min-width: 640px) {
	.hero-desc {
		font-size: 1.125rem;
	}
}

.key-values-container {
	margin-top: 1.5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.625rem;
	font-family: var(--font-mono);
	font-size: 0.75rem;
}

.key-value-item {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	border-radius: var(--radius-xl);
	border: 1px solid var(--border-light);
	background-color: var(--bg-primary);
	padding: 0.5rem 0.875rem;
	font-weight: 600;
	color: var(--text-primary);
	box-shadow: var(--shadow-sm);
}

.key-value-icon {
	width: 0.875rem;
	height: 0.875rem;
	color: var(--brand-blue);
}

.hero-actions {
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 1rem;
}

.btn-primary {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	border-radius: var(--radius-xl);
	background-color: var(--brand-blue);
	padding: 0.875rem 1.75rem;
	font-size: 0.875rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--bg-primary);
	box-shadow: var(--shadow-luxury);
	transition: all 0.2s ease;
}
.btn-primary:hover {
	background-color: var(--brand-blue-hover);
	transform: scale(1.02);
}

.btn-secondary {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	border-radius: var(--radius-xl);
	border: 1px solid var(--border-dark);
	background-color: var(--bg-primary);
	padding: 0.875rem 1.75rem;
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--text-primary);
	transition: all 0.2s ease;
}
.btn-secondary:hover {
	border-color: var(--brand-blue);
	background-color: var(--bg-secondary);
}

.btn-icon-right {
	width: 1rem;
	height: 1rem;
	color: var(--bg-primary);
	transition: transform 0.2s ease;
}
.btn-primary:hover .btn-icon-right {
	transform: translateX(0.25rem);
}

.countdowns-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

/* DIGITAL POSTER CARDS */
.lineup-section {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.lineup-header {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.75rem;
	border-bottom: 1px solid var(--border-light);
	padding-bottom: 1rem;
}

@media (min-width: 640px) {
	.lineup-header {
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
	}
}

.lineup-subtitle {
	font-family: var(--font-mono);
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: var(--brand-blue);
}

.lineup-title {
	margin-top: 0.25rem;
	font-family: var(--font-serif, var(--font-sans));
	font-size: 1.875rem;
	font-weight: 700;
	letter-spacing: -0.025em;
	color: var(--text-primary);
}
@media (min-width: 640px) {
	.lineup-title {
		font-size: 2.25rem;
	}
}

.lineup-count-badge {
	border-radius: var(--radius-xl);
	border: 1px solid var(--brand-blue);
	background-color: var(--bg-primary);
	padding: 0.375rem 1rem;
	font-family: var(--font-mono);
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: var(--text-primary);
	box-shadow: var(--shadow-sm);
}

.events-grid {
	display: grid;
	gap: 1.5rem;
}
@media (min-width: 640px) {
	.events-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
@media (min-width: 1024px) {
	.events-grid {
		grid-template-columns: repeat(3, 1fr);
	}
}

.event-card {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	border-radius: var(--radius-2xl);
	border: 1px solid var(--border-light);
	background-color: var(--bg-primary);
	padding: 1.75rem;
	transition: all 0.3s ease;
	text-decoration: none;
	color: inherit;
}

.event-card:hover {
	transform: translateY(-0.25rem);
	border-color: var(--brand-blue);
	box-shadow: var(--shadow-luxury-lg);
}

.event-card-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid var(--border-light);
	padding-bottom: 0.75rem;
}

.event-code {
	font-family: var(--font-mono);
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	color: var(--brand-blue);
}

.event-team-size {
	border-radius: var(--radius-md);
	border: 1px solid var(--border-light);
	background-color: var(--bg-secondary);
	padding: 0.25rem 0.625rem;
	font-family: var(--font-mono);
	font-size: 0.625rem;
	font-weight: 600;
	color: var(--text-secondary);
	width: fit-content;
	align-self: flex-end;
}

.event-card-title-group {
	margin-top: 1rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;
}

.event-prizes {
	display: flex;
	gap: 0.75rem;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
}

.prize-badge {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 0.5rem;
	border-radius: var(--radius-xl);
	background-color: var(--bg-secondary);
	border: 1px dashed var(--border-light);
	transition:
		border-color 0.2s ease,
		background-color 0.2s ease;
}

.event-card:hover .prize-badge {
	border-style: solid;
	border-color: var(--brand-blue);
	background-color: rgba(14, 165, 233, 0.05);
}

.prize-place {
	font-family: var(--font-sans);
	font-size: 0.65rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--text-muted);
	margin-bottom: 0.25rem;
	transition: color 0.2s;
}

.prize-amount {
	font-family: var(--font-mono);
	font-size: 1.125rem;
	font-weight: 700;
	color: var(--text-primary);
	transition: color 0.2s;
}

.event-card:hover .prize-amount {
	color: var(--brand-blue);
}

.event-icon-wrapper {
	display: flex;
	height: 2.5rem;
	width: 2.5rem;
	align-items: center;
	justify-content: center;
	border-radius: var(--radius-xl);
	border: 1px solid var(--border-dark);
	transition:
		background-color 0.2s,
		color 0.2s;
}

.theme-hackathon,
.theme-ctf,
.theme-games {
	/* we will just set colors generally below to emulate the dynamic utility classes */
	background-color: var(--brand-blue-light);
	color: var(--brand-blue);
}
.event-card:hover .event-icon-wrapper {
	background-color: var(--text-primary);
	color: var(--bg-primary);
}

.event-icon {
	width: 1.25rem;
	height: 1.25rem;
}

.event-title {
	font-family: var(--font-serif, var(--font-sans));
	font-size: 1.25rem;
	font-weight: 700;
	color: var(--text-primary);
	transition: color 0.2s;
}

.event-card:hover .event-title {
	color: var(--brand-blue);
}

.event-desc {
	margin-top: 0.75rem;
	font-size: 0.75rem;
	line-height: 1.6;
	color: var(--text-secondary);
}

.event-card-footer {
	margin-top: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid var(--border-light);
	padding-top: 1rem;
	font-family: var(--font-mono);
	font-size: 0.75rem;
	color: var(--text-muted);
}

.event-venue {
	display: inline-flex;
	align-items: center;
	gap: 0.375rem;
	font-weight: 600;
	color: var(--text-secondary);
}

.event-venue-icon {
	width: 0.875rem;
	height: 0.875rem;
	color: var(--brand-blue);
}

.event-action {
	display: inline-flex;
	align-items: center;
	gap: 0.25rem;
	font-weight: 700;
	color: var(--text-primary);
	transition: all 0.2s;
}

.event-card:hover .event-action {
	transform: translateX(0.25rem);
	color: var(--brand-blue);
}

.event-action-icon {
	width: 0.875rem;
	height: 0.875rem;
}
</style>
