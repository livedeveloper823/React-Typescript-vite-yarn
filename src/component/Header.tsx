import SearchIcon from '@mui/icons-material/Search';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpIcon from '@mui/icons-material/Help';
// import KeyboardArrowDownIcon from '@mui/icons-material/Help';
// import { FormControl, Select, MenuItem } from '@mui/material';
import Logo from '../assets/logo.png';
// import Content from '../content/index'

const Header = () => {

	return (
		<div>
			<div className="flex gap-3 justify-end items-center bg-[#000a26] text-lg px-20 py-1">
				<div className='text-xl text-gray-400'>
					<SupportAgentIcon className='hover:text-white mx-1' />
					Atención al cliente
				</div>
				<div className='text-gray-400'>
					<HelpIcon className='hover:text-white mx-1' />
					FAQ
				</div>
			</div>
			<div className="bg-[#0f1835] flex items-center py-5 px-40">
				<img src={Logo} alt="" className='w-48' />
				<div className='w-[40%] flex justify-between p-2 border-2 border-[#00fa91] rounded-md mx-40'>
					<input placeholder='Buscor products...' type="text" className='w-full bg-[#0f1835] text-white rounded-sm outline-none focus:bottom-2 focus:outline-white' onChange={(e) => e.target.value} />
					<SearchIcon className='text-white mx-5' />
				</div>
				<button className='bg-[#00fa91] hover:bg-[#0f1835] hover:text-[#00fa91] text-md font-bold rounded-md outline-none px-5 py-2 mx-20'>
					Iniciar Sesión
				</button>
				
				{/* <FormControl color="success" className='inline-flex w-64'>
					<Select
						className="bg-green-600 hover:bg-green-500 text-center"
						// value={levelKey}
						//   onChange={(e) => setLevelKey(e.target.value)}
						sx={{
							color: "white",
							borderRadius: "8px",
						}}
					>
						<MenuItem value="0" className='flex'><img className='w-10' src={Content.countryImg[0]} alt='' />Nível</MenuItem>
						<MenuItem value="1" className='flex'><img className='w-10' src={Content.countryImg[1]} alt='' />Iniciante</MenuItem>
						<MenuItem value="2" className='flex'><img className='w-10' src={Content.countryImg[1]} alt='' />Iniciante</MenuItem>
					</Select>
				</FormControl> */}
			</div>
		</div>
	)
}

export default Header;