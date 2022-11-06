import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

function ApplicantList() {
	const [data, setData] = useState([]);
	const [students, setStudent] = useState([]);

	const teacherHeader = [
		{ label: "id", key: "_id" },
		{ label: "imie", key: "name" },
		{ label: "nazwisko", key: "surname" },
		{ label: "szkola", key: "school" },
		{ label: "adres_szkoly", key: "schoolAddress" },
		{ label: "email", key: "email" },
		{ label: "telefon", key: "phone" },
		{ label: "typ", key: "type" },
	];

	const studentHeader = [
		{ label: "opiekun_id", key: "teacher_id" },
		{ label: "imie", key: "name" },
		{ label: "nazwisko", key: "surname" },
		{ label: "email", key: "email" },
	];

	useEffect(() => {
		const getData = async () => {
			const response = await fetch("/api/admin").then((res) => res.json());
			setData(response);
			response.forEach((e) =>
				e.participants.forEach((i) =>
					setStudent(() => [...students, { teacher_id: e._id, ...i }])
				)
			);
		};
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// TODO: email may not be unique
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Surname</th>
						<th>School</th>
						<th>School Address</th>
						<th>Phone</th>
						<th>E-mail</th>
					</tr>
				</thead>
				<tbody>
					{data.map((data, i) => (
						<tr key={data.id}>
							<td>{i + 1}</td>
							<td>{data.name}</td>
							<td>{data.surname}</td>
							<td>{data.school}</td>
							<td>{data.schoolAddress}</td>
							<td>{data.phone}</td>
							<td>{data.email}</td>
							<td>{data.type}</td>
						</tr>
					))}
				</tbody>
			</table>
			<CSVLink headers={teacherHeader} data={data} filename={"Teacher.csv"}>
				Teachers
			</CSVLink>
			<br />
			<CSVLink headers={studentHeader} data={students} filename={"Student.csv"}>
				Students
			</CSVLink>
			;
		</>
	);
}

export default ApplicantList;
