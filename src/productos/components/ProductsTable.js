
import {PRODUCTS} from "./Products";

import {carnes} from "./Products";
import '../../styles/ProductRow.css';

import {useState} from "react";


function ProductRow({ product }) {
    const name = product.stock ? product.nombre : // product.name;
        <span className="span">
             {product.name}
        </span>;
    console.log(product.stock)
    const stock = product.stock>0 ? product.stock : "No tiene Stock"
    return (
        <tr>
            <td>{name}</td>
            <td>{product.precio}</td>
            <td>{stock}</td>
        </tr>
    );
}
function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="3">
                Categoria {category}
            </th>
        </tr>
    );
}
function ProductTable( {products, filterText, inStockOnly} ){
    const rows = [];
    let lastCategory = null;

    products.forEach((elem) => {
        if (elem.nombre.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return ;
        }
        if (inStockOnly && !elem.stock){
            return;
        }
        if (elem.categoria !== lastCategory){
            rows.push(
                <ProductCategoryRow
                    category ={elem.categoria}
                    key={elem.id}/>
            );
        }
        rows.push(
            <ProductRow
                product={elem}
                key={elem.nombre} />
        );
        lastCategory = elem.category;
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Nombre   </th>
                <th>Precio      </th>
                <th>Cantidad disponible</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar( {filterText, onFilterTextChange}) {
    return (
        <form>
            <input
                type={"text"}
                placeholder={"Search..."}
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />

        </form>
    );
}

function FilterableProductTable({products}) {

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export function ProductsTable() {
    return <FilterableProductTable products={carnes} />;
}


