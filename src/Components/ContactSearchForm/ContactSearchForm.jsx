import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import "./ContactSearchForm.css";

export default function ContactSearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialQ = searchParams.get("q") ?? "";
    const [value, setValue] = useState(initialQ);

    useEffect(() => {
        setValue(initialQ);
    }, [initialQ]);

    useEffect(() => {
        const t = setTimeout(() => {
            const next = new URLSearchParams(searchParams);
            const v = value.trim();
            if (v) next.set("q", v);
            else next.delete("q");
            setSearchParams(next, { replace: true });
        }, 200);

        return () => clearTimeout(t);
    }, [value]);

    const onClear = () => setValue("");

    return (
        <div className="wa-search">
      <span className="wa-search__icon" aria-hidden="true">
        <FiSearch />
      </span>

            <label className="sr-only" htmlFor="contactSearch">
                Buscar contacto
            </label>

            <input
                id="contactSearch"
                type="text"
                className="wa-search__input"
                placeholder="Buscar o iniciar un chat"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                autoComplete="off"
            />

            {value.length > 0 && (
                <button
                    type="button"
                    className="wa-search__clear"
                    onClick={onClear}
                    aria-label="Limpiar búsqueda"
                    title="Limpiar"
                >
                    <FiX />
                </button>
            )}
        </div>
    );
}
