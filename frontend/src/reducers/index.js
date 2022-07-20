export const matchReducer = (acc, curr) => {
    const home = {
        name: curr.mandante,
        points: curr.pontuacao_geral_mandante.total_pontos,
        wins: curr.pontuacao_geral_mandante.total_vitorias,
        draws: curr.pontuacao_geral_mandante.total_empates,
        loses: curr.pontuacao_geral_mandante.total_derrotas,
        goalsAgainst: curr.pontuacao_geral_mandante.total_gols_sofridos,
        goalsFor: curr.pontuacao_geral_mandante.total_gols_marcados,
        goalsDifference: curr.pontuacao_geral_mandante.total_gols_marcados - curr.pontuacao_geral_mandante.total_gols_sofridos,
    };

    const away = {
        name: curr.visitante,
        points: curr.pontuacao_geral_visitante.total_pontos,
        wins: curr.pontuacao_geral_visitante.total_vitorias,
        draws: curr.pontuacao_geral_visitante.total_empates,
        loses: curr.pontuacao_geral_visitante.total_derrotas,
        goalsAgainst: curr.pontuacao_geral_visitante.total_gols_sofridos,
        goalsFor: curr.pontuacao_geral_visitante.total_gols_marcados,
        goalsDifference: curr.pontuacao_geral_visitante.total_gols_marcados - curr.pontuacao_geral_visitante.total_gols_sofridos,
    };

    return [...acc, home, away];
};
