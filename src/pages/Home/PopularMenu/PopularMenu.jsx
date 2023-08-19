import SecctionTitle from "../../../components/SectionTitle/SecctionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setmenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setmenu(popularItems)
    //         })
    // }, [])
    return (
        <section className="mb-12">
            <SecctionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SecctionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>
                    )
                }
            </div>
            <div className="text-center"><button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></div>

        </section>
    );
};

export default PopularMenu;