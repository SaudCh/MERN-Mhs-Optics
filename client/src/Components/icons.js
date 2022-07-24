import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronLeft, faChevronRight, faEarthAsia, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';

export const ShoppingCartIcon = ({ color, size, style }) => (
    <FontAwesomeIcon icon={faCartShopping} color={color} size={size} style={style} />
);

export const SearchIcon = ({ color, size, style }) => (
    <FontAwesomeIcon icon={faSearch} color={color} size={size} style={style} />
);

export const EarthIcon = ({ color, size, style }) => (
    <FontAwesomeIcon icon={faEarthAsia} color={color} size={size} style={style} />
);

export const UserIcon = ({ color, size, style }) => (
    <FontAwesomeIcon icon={faUser} color={color} size={size} style={style} />
);

export const ChevronLeftIcon = ({ color, size, style }) => (
    <FontAwesomeIcon icon={faChevronLeft} color={color} size={size} style={style} />
);

export const ChevronRightIcon = ({ color, size, style }) => (
    <FontAwesomeIcon icon={faChevronRight} color={color} size={size} style={style} />
);


