import React from 'react';
import { Pokemon } from '../../domain/model/Pokemon';
import './RowTable.scss';
import { ParagraphWrapper } from '../styledComponents/paragraphWrapper';
import { useTranslation } from 'react-i18next';

const RowTable: (props: { pokemon: Pokemon }) => JSX.Element[] = (props: { pokemon: Pokemon }) => {
    const { pokemon } = props;
    const { t } = useTranslation();
    const arrayAttributes = Object.getOwnPropertyNames(pokemon);
    return arrayAttributes.map((attribute, index) => {
        return (
            <td className="td-pokemon" key={`index-pokemon-head-${index}`}>
                {attribute === 'types' ? (
                    pokemon.types.map((type, index) => {
                        return (
                            <ParagraphWrapper type={type.name} key={`index-type-${index}`}>
                                {t(`type.${type.name}`)}
                            </ParagraphWrapper>
                        );
                    })
                ) : attribute === 'frontDefault' ? (
                    <img alt="" src={pokemon.frontDefault} className="character_img" />
                ) : (
                    pokemon[attribute]
                )}
            </td>
        );
    });
};

export default RowTable;
