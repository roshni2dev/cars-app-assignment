import { useEffect, useMemo, useState } from "react";
import { Box, Button, TablePagination } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import SearchBox from "../../components/search-box/search-box.component";
import CardList from "../../components/card-list/card-list.component";
import carsData from '../../data/cars.data';
import './home.styles.scss';



const Home = () => {
    const [searchField, setSearchField] = useState('');
    const [page, setPage] = useState(0);
    const navigate = useNavigate();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        navigate(`/car/${newPage}`)
    };

    const listedCars = useMemo(
        () =>
            carsData.slice(
                page * 10,
                page * 10 + 10,
            ),
        [page],
    );

    const [filteredCars, setFilterCars] = useState(listedCars);


    useEffect(() => {
        const newFilteredCars = listedCars.filter((car) => {
            return car.name.toLocaleLowerCase().includes(searchField);
        });

        setFilterCars(newFilteredCars);
    }, [listedCars, searchField]);



    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <Box className='home-container'>
            <Box className='header'>
                <SearchBox
                    className='cars-search-box'
                    onChangeHandler={onSearchChange}
                    placeholder='search...'
                />
                <Button className="toggle_button">Relevance<KeyboardArrowDown /></Button>
                <Button className="toggle_button">All brands<KeyboardArrowDown /></Button>
            </Box>
            <CardList cars={filteredCars} />
            {
                filteredCars.length === 0
                    ?
                    ''
                    :

                    <TablePagination
                        rowsPerPageOptions={10}
                        component="div"
                        count={carsData.length}
                        rowsPerPage={10}
                        page={page}
                        onPageChange={handleChangePage}
                    />
            }
        </Box>
    )
}
export default Home;