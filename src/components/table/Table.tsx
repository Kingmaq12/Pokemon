import React from 'react';
import './Table.scss';
import { useTranslation } from 'react-i18next';
import { Pokemon } from '../../domain/model/Pokemon';
import RowTable from '../rowTable/RowTable';

export const Table = (props: { listPokemon: Pokemon[] }) => {
    const { listPokemon } = props;
    const { t } = useTranslation();
    const arrayAttributes = listPokemon.length > 0 ? Object.getOwnPropertyNames(listPokemon[0]) : [];
    return (
        <div className="table-wrapper">
            {listPokemon.length === 0 ? (
                <p> {t('table.no-result')} </p>
            ) : (
                <table className="pokemon-table">
                    <thead>
                        <tr>
                            {arrayAttributes.map((attribute, index) => {
                                return <th key={`index-pokemon-head-${index}`}>{t(`pokemon.${attribute}`)}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {listPokemon.map((pokemon, index) => {
                            return (
                                <tr className="table_row" key={`index-pokemon-${index}`}>
                                    <RowTable pokemon={pokemon} />
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};
