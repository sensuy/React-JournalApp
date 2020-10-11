import React from 'react'

export const JournalEntry = () => {
	return (
		<div className="journal__entry pointer">

			{/* https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg */}
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundImage: 'url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)'
				}}
			></div>

			<div className="journal__entry-body">
				<p className="journal__entry-title">
					Un nuevo día
				</p>
				<p className="journal__entry-content">
					Contrary to popular belief, Lorem Ipsum is not simply random text.
				</p>
			</div>

			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	)
}
