import React, { useEffect, useState } from 'react'

import { useWindowSize } from '../hooks/useWindowSize.js'

import CardContainer from '../CardContainer'
import FilterBar from '../FilterBar'

import { mobileBg, desktopBg } from '../../../images';
import areAllObjectArraysEmpty from '../../utilities.js'
import data from '../../../data.json'

import styles from './styles.module.css'

const emptyFilter = {
	role: [],
	level: [],
	languages: [],
	tools: []
}

export default function Employees() {
	const [filterValues, setFilterValues] = useState(
		emptyFilter
	)
	const [filteredData, setFilteredData] = useState(data);
	const { width } = useWindowSize();

	useEffect(() => {
		const newData = data.filter(item =>
			Object.entries(filterValues).every(([key, values]) =>
				!values.length ||
				(Array.isArray(item[key])
					? values.every(v => item[key].includes(v))
					: values.includes(item[key]))
			)
		);

		setFilteredData(newData);
	}, [filterValues]);


	const handelFilterByTag = (tag) => {
		const [key, value] = Object.entries(tag)[0]
		setFilterValues((prev) => ({
			...prev,
			[key]: prev[key].includes(value) ? prev[key] : [...prev[key], value]
		}));
	};

	const handelClearFilter = () => {
		setFilterValues(emptyFilter)
	}

	const handelDeleteTag = (tag) => {
		const [key, value] = Object.entries(tag)[0]
		setFilterValues((prev) => ({
			...prev,
			[key]: prev[key].filter(el => el !== value)
		}));
	}

	const isFiltering = areAllObjectArraysEmpty([filterValues])

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img src={width >= 768 ? desktopBg : mobileBg} />
			</header>
			{!isFiltering &&
				<FilterBar
					filterValues={filterValues}
					handelClearFilter={handelClearFilter}
					handelDeleteTag={handelDeleteTag}
				/>}
			<CardContainer data={filteredData} handelFilterByTag={handelFilterByTag} />
		</div>
	)
}
