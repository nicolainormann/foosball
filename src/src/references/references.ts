interface IMatch {
	id: string,
    matchDate: Date,
    fraction1Name: string,
    offensiveFraction1Username: string,
    defensiveFraction1Username: string,
    fraction2Name: string,
    offensiveFraction2Username: string,
    defensiveFraction2Username: string,
    fraction1Score: number,
    fraction2Score: number
}

interface IUser {
	name: string,
	username: string
}

interface IUsers extends Array<IUser> {}

interface IUserStatistics {
	matchesPlayedTotal: number,
    matchesWonTotal: number,
    matchesLostTotal: number,
    matchesPlayedAsDefender: number,
    matchesPlayedAsOffender: number,
    matchesWonOffender: number,
    matchesWonDefender: number,
    winPercentageTotal: number,
    winRatioTotal: number,
    winPercentageDefender: number,
    winRatioDefender: number,
    winPercentageOffender: number,
    winRatioOffender: number,
    goalsScoredPrMatch: number,
    goalsConcededPrMatch: number,
    totalGoalsScored: number,
    totalGoalsConceded: number
}

interface ITournament {
	id: string,
    name: string,
    createdDatetime: Date,
    tournamentConfiguration: {
        kFactor: number,
        pointDifferenceFactor: number,
        initialUserRank: number
    },
    matchIds: Array<string>,
    usernames: Array<string>
}

interface ITournamentShort {
	id: string,
	name: string
}

interface ITournaments extends Array<ITournamentShort> {}