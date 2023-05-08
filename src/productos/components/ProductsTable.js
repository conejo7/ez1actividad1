
import {PRODUCTS} from "./Products";

import '../../styles/ProductRow.css';

import {useState} from "react";


function ProductRow({ product }) {
    const name = product.stocked ? product.name : // product.name;
        <span className="span">
             {product.name}
        </span>;
    console.log(product.stocked)
    const stock = product.stocked ? "Tiene Stock" : "No tiene Stock"
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
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
        if (elem.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return ;
        }
        if (inStockOnly && !elem.stocked){
            return;
        }
        if (elem.category !== lastCategory){
            rows.push(
                <ProductCategoryRow
                    category ={elem.category}
                    key={elem.category}/>
            );
        }
        rows.push(
            <ProductRow
                product={elem}
                key={elem.name} />
        );
        lastCategory = elem.category;
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Nombre </th>
                <th>Precio </th>
                <th>Stock</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar( {filterText,inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <form>
            <input
                type={"text"}
                placeholder={"Search..."}
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label>
                <input
                    type={"checkbox"}
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                />
                Visuaizar productos con stock
            </label>
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
    return <FilterableProductTable products={PRODUCTS} />;
}


