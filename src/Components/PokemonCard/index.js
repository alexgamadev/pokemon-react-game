import styles from './PokemonCard.module.css';
import types from '../../Assets/Types';

const PokemonCard = (props) => {
    const {card} = props;
    const mainTypeColor = types[card?.types[0]?.type.name]?.color;

    return (
        card ? 
            (<div className={styles.container} style={mainTypeColor ? {backgroundColor: `${mainTypeColor}99`} : null} onClick={(e) => props.onClick(e, card)}>
                <header className={styles.header}>
                    <span className={styles.id}>{card?.id}</span>
                </header>
                <img className={styles.image}  alt={card?.name} src={card?.imageSrc} />
                <footer className={styles.footer}>
                    <NameAndTypes card={card} />
                    <Description card={card} />
                </footer>
            </div>) : null
    );
};

export default PokemonCard;

const Icons = (props) => {
    const {card} = props;

    return (
        <div className={styles.icons}>
            {card?.types.map((obj, index) => {
                return (
                <div className={`${styles.typeIcon} ${styles[obj.type.name]}`} key={`${card?.id}-${index}`}>
                    <img className={styles.typeImg} key={`${card?.id}-${index}`} alt={obj.type.name} src={types[obj.type.name].sprite} />
                </div>);
            })} 
        </div>
    );
}

const Description = (props) => {
    const {card} = props;
    return (
        <div>
            {card?.description}
        </div>
    );
}

const NameAndTypes = (props) => {
    const {card} = props;
    return (
        <div className={styles.footerHead}>
            <span className={styles.name}>{card?.name.toUpperCase()}</span>
            <Icons card={card}/>
        </div>
    );
}