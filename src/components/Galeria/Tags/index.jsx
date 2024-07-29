import { styled } from 'styled-components';
import tags from './tags.json'; // Importa el archivo JSON con los tags

// Contenedor principal de los tags con estilos
const TagsContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 64px;
    margin: 25px 0;


    @media (max-width: 599px) {
        gap: 5px;
        flex-direction: column;
    }
`;

// Título de la sección de tags con estilos
const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

// Estilo del botón de tag
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {       border-color: #C98CF1;
    }
`;

// Contenedor div para los tags
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;

    @media (max-width: 599px){
        width: 100%;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;

// Componente funcional Tags
const Tags = () => {
    return (
        <TagsContainer>
            {/* Título de la sección de tags */}
            <TagTitulo>Busque por tags:</TagTitulo>

            {/* Div contenedor de los tags */}
            <Div>
                {/* Mapeo de los tags desde el archivo JSON */}
                {tags.map(tag => (
                    <Tag key={tag.id}>{tag.titulo}</Tag>
                ))}
            </Div>
        </TagsContainer>
    );
};

export default Tags;