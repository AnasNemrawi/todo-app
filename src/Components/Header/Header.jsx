import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Flex } from '@mantine/core'

export default function AppHeader() {
	return (
		<Header style={{ backgroundColor: 'green', height: '65px', margin: 'auto' }}>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				flexDirection="row"
				gap="1rem"
				height="100%"
				padding="0 20px"
			>
				<div>
					<Link
						style={{
							color: 'white',
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: 'bold',
							marginRight: '20px',
						}}
						to="/"
					>
						Home
					</Link>
					<Link
						data-testid="go-settings"
						style={{
							color: 'white',
							textDecoration: 'none',
							fontSize: '18px',
							fontWeight: 'bold',
						}}
						to="/settings"
					>
						Settings
					</Link>
				</div>
				{/* You can add any other elements you want on the right side */}
			</Flex>
		</Header>

	)
}
