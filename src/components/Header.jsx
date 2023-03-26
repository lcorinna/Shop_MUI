import { AppBar, Toolbar } from "@material-ui/core";
import { Badge } from "@mui/material";
import Typography from '@material-ui/core/Typography';
import IconButton from 'material-ui/IconButton';

function Header ({handleCart, orderLen}) {
	return (
		<AppBar
			position="static"
		>
			<Toolbar>
				<Typography
					variant="h6"
					component="span"
					sx={{ flexGrow: 1 }}
				>
					MUI SHOP
				</Typography>
				<IconButton
					color="inherit"
					onClick={handleCart}
				>
					<Badge
						color="secondary"
						badgeContent={orderLen}
					>
					</Badge>
					<ShopingBasket/>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header;