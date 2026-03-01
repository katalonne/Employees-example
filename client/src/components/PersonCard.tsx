import { memo } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { CustomSelect } from './Select';
import { type Theme } from '@mui/material/styles';

const StyledPersonCard = styled(Card)<{ theme?: Theme }>(({theme}) => {
  return `
    border-radius: 6px;
    box-shadow: none;
    &:hover {
      box-shadow: -4px 8px 25px -5px ${theme.palette.primary.light};
    }
  `
})

interface PersonCardProps {
  userId: number,
  fullName: string; // Full name of the person
  status: string; // Status of the person
  imgUrl: string;
  imgAlt: string;
  statuses: string[];
  onStatusChange?: (userId: number, selectValue: string | number) => void;
}

export const PersonCard = memo(({
  userId,
  fullName = '',
  status = '',
  imgUrl = 'https://ozgrozer.github.io/100k-faces/0/6/006689.jpg',
  imgAlt = '',
  statuses = [],
  onStatusChange = () => {},
}: PersonCardProps) => {
  return (
    <StyledPersonCard sx={{ 
        height: '180px', 
        px: 3.5, 
        display: 'flex', 
        alignItems: 'flex-end',
        gap: '25px'
      }}
    >
      <CardMedia
        component="img"
        height=""
        image={imgUrl}
        alt={imgAlt}
        sx={{ borderRadius: '50%', height: '100%', width: 'auto', py: 4 }}
      />
      <CardContent sx={{ width: '100%', px: '0'}}>
        <Typography>{fullName}</Typography>
        <CustomSelect 
          variant={"standard"} 
          value={status}
          options={statuses}
          onSelect={(val) => onStatusChange(userId, val)}
        />
      </CardContent>
    </StyledPersonCard>
  )
}, (prevProps, nextProps) => {
  return (
    prevProps.userId === nextProps.userId &&
    prevProps.fullName === nextProps.fullName &&
    prevProps.status === nextProps.status &&
    prevProps.imgUrl === nextProps.imgUrl &&
    prevProps.imgAlt === nextProps.imgAlt
    // Intentionally ignore onStatusChange identity to avoid unnecessary renders
  );
})