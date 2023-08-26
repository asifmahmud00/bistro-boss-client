import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SecctionTitle from '../../../components/SectionTitle/SecctionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SecctionTitle subHeading="Don't miss" heading="Today's Offer"></SecctionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" img={dessertImg} ></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} ></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg} ></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg} ></MenuCategory>
            <MenuCategory items={drinks} title="soup" img={soupImg} ></MenuCategory>
        </div>
    );
};

export default Menu;