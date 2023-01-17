import styled from 'styled-components'
import theme from '@/styles/theme'
import { Color } from '@/styles/utils'

interface IconWrapperProps {
  size?: string
  color: string
  pointer: boolean
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'default')};
  transition: all 0.3s;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ color }) => color};
  }
`
interface IconProps {
  icon?: keyof typeof ICONS
  size?: string
  color?: Color
  onClick?: Function
}

const Icon = ({
  icon = 'default',
  size = '16px',
  color = 'dark',
  onClick,
}: IconProps) => {
  return (
    <IconWrapper
      size={size}
      onClick={() => onClick && onClick()}
      color={theme.colors[color]}
      pointer={!!onClick}
    >
      {ICONS[icon]()}
    </IconWrapper>
  )
}

export default Icon

const ICONS = {
  chevron: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  'eye-hidden': () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8908 19.8967C19.1703 20.1675 19.5983 20.1849 19.8777 19.8967C20.1659 19.5998 20.1485 19.1806 19.8777 18.9098L5.0655 4.10635C4.79476 3.8356 4.34061 3.82687 4.06987 4.10635C3.80786 4.36836 3.80786 4.8225 4.06987 5.08451L18.8908 19.8967ZM12.0087 4.60416C10.4803 4.60416 9.10044 4.86617 7.81659 5.29412L9.23144 6.70897C10.1135 6.46443 11.0218 6.31595 12.0087 6.31595C17.5633 6.31595 21.9738 11.1456 21.9738 12.1675C21.9738 12.8574 20.5764 14.6304 18.3493 16.0277L19.6594 17.3465C22.4017 15.5474 24 13.198 24 12.1675C24 10.3771 19.179 4.60416 12.0087 4.60416ZM12.0087 19.7395C13.6157 19.7395 15.0917 19.4601 16.4279 18.9972L15.0131 17.5823C14.0699 17.8618 13.0742 18.0277 12.0087 18.0277C6.43668 18.0277 2.0262 13.3902 2.0262 12.1675C2.0262 11.5823 3.50218 9.7046 5.869 8.23735L4.53275 6.90111C1.68559 8.7177 0 11.1282 0 12.1675C0 13.9579 4.92576 19.7395 12.0087 19.7395ZM16.3493 13.8356C16.5764 13.3291 16.6987 12.7526 16.6987 12.1675C16.6987 9.55613 14.6114 7.48626 12.0087 7.48626C11.4061 7.48626 10.8472 7.60853 10.3319 7.81814L16.3493 13.8356ZM12.0087 16.8574C12.6725 16.8574 13.3013 16.7002 13.869 16.4295L7.72926 10.2898C7.44978 10.8574 7.30131 11.495 7.30131 12.1762C7.31004 14.7177 9.38865 16.8574 12.0087 16.8574Z" />
    </svg>
  ),
  eye: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0087 19.5654C19.179 19.5654 24 13.7837 24 11.9933C24 10.2029 19.1616 4.42999 12.0087 4.42999C4.94323 4.42999 0 10.2029 0 11.9933C0 13.7837 4.92576 19.5654 12.0087 19.5654ZM12.0087 17.8536C6.43668 17.8536 2.0262 13.216 2.0262 11.9933C2.0262 10.9715 6.43668 6.14178 12.0087 6.14178C17.5546 6.14178 21.9738 10.9715 21.9738 11.9933C21.9738 13.216 17.5546 17.8536 12.0087 17.8536ZM12.0087 16.6833C14.6114 16.6833 16.6987 14.5435 16.6987 11.9933C16.6987 9.38196 14.6114 7.31209 12.0087 7.31209C9.38865 7.31209 7.29258 9.38196 7.30131 11.9933C7.31878 14.5435 9.38865 16.6833 12.0087 16.6833ZM12 13.5042C11.1616 13.5042 10.4803 12.823 10.4803 11.9933C10.4803 11.1636 11.1616 10.4824 12 10.4824C12.8384 10.4824 13.5197 11.1636 13.5197 11.9933C13.5197 12.823 12.8384 13.5042 12 13.5042Z" />
    </svg>
  ),
  close: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.72127 22.2788C1.79092 22.3486 1.87364 22.4039 1.96469 22.4416C2.05574 22.4794 2.15333 22.4988 2.25189 22.4988C2.35045 22.4988 2.44805 22.4794 2.5391 22.4416C2.63015 22.4039 2.71286 22.3486 2.78252 22.2788L12 13.0613L21.2213 22.2788C21.362 22.4196 21.5529 22.4986 21.7519 22.4986C21.9509 22.4986 22.1418 22.4196 22.2825 22.2788C22.4232 22.1381 22.5023 21.9472 22.5023 21.7482C22.5023 21.5492 22.4232 21.3583 22.2825 21.2176L13.0613 12.0001L22.2788 2.77884C22.4195 2.63811 22.4986 2.44724 22.4986 2.24822C22.4986 2.0492 22.4195 1.85833 22.2788 1.71759C22.138 1.57686 21.9472 1.4978 21.7481 1.4978C21.5491 1.4978 21.3582 1.57686 21.2175 1.71759L12 10.9388L2.77877 1.72134C2.63529 1.59848 2.45074 1.53427 2.26198 1.54156C2.07322 1.54885 1.89417 1.6271 1.7606 1.76067C1.62702 1.89424 1.54878 2.0733 1.54148 2.26205C1.53419 2.45081 1.5984 2.63537 1.72127 2.77884L10.9388 12.0001L1.72127 21.2213C1.58158 21.3619 1.50317 21.5519 1.50317 21.7501C1.50317 21.9482 1.58158 22.1383 1.72127 22.2788Z" />
    </svg>
  ),
  search: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.1425 18.7302L16.8994 15.4871C17.8822 14.2004 18.4213 12.6398 18.4215 10.9929C18.4215 9.0083 17.6486 7.14233 16.245 5.73901C14.8417 4.33569 12.976 3.56274 10.9911 3.56274C9.00647 3.56274 7.1405 4.33569 5.73718 5.73901C2.84021 8.63623 2.84021 13.3501 5.73718 16.2468C7.1405 17.6504 9.00647 18.4233 10.9911 18.4233C12.6379 18.4231 14.1986 17.8841 15.4853 16.9012L18.7284 20.1443C18.9235 20.3396 19.1796 20.4373 19.4354 20.4373C19.6913 20.4373 19.9474 20.3396 20.1425 20.1443C20.5331 19.7539 20.5331 19.1206 20.1425 18.7302ZM7.15125 14.8328C5.03406 12.7156 5.0343 9.27051 7.15125 7.15308C8.17688 6.12769 9.54065 5.56274 10.9911 5.56274C12.4418 5.56274 13.8053 6.12769 14.8309 7.15308C15.8566 8.17871 16.4215 9.54248 16.4215 10.9929C16.4215 12.4436 15.8566 13.8071 14.8309 14.8328C13.8053 15.8584 12.4418 16.4233 10.9911 16.4233C9.54065 16.4233 8.17688 15.8584 7.15125 14.8328Z" />
    </svg>
  ),
  attachment: () => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.49918 15.498C3.73118 15.498 2.96318 15.2055 2.37868 14.621C1.20918 13.451 1.20918 11.548 2.37868 10.3785L7.58368 5.203C8.36518 4.4265 9.60718 4.401 10.3537 5.1465C10.7182 5.511 10.9102 6.003 10.8947 6.5325C10.8792 7.0505 10.6657 7.5415 10.2932 7.914L5.35368 12.8535C5.15818 13.049 4.84218 13.049 4.64668 12.8535C4.45118 12.658 4.45118 12.342 4.64668 12.1465L9.58618 7.207C9.77768 7.0155 9.88768 6.7655 9.89518 6.503C9.90268 6.252 9.81418 6.021 9.64668 5.8535C9.28918 5.4975 8.68018 5.523 8.28918 5.912L3.08468 11.0865C2.30618 11.8655 2.30618 13.1345 3.08568 13.914C3.86568 14.6935 5.13418 14.6935 5.91418 13.914L13.1192 6.6235C13.6882 6.0545 14.0002 5.3015 14.0002 4.5C14.0002 3.6985 13.6882 2.9455 13.1217 2.379C12.5547 1.812 11.8017 1.5 11.0002 1.5C10.1987 1.5 9.44568 1.812 8.87868 2.379L1.85268 9.355C1.65618 9.5495 1.34018 9.5485 1.14568 9.352C0.951179 9.156 0.952179 8.84 1.14818 8.645L8.17318 1.6705C8.92718 0.916 9.93168 0.5 11.0002 0.5C12.0687 0.5 13.0732 0.916 13.8287 1.672C14.5842 2.427 15.0002 3.4315 15.0002 4.5C15.0002 5.5685 14.5842 6.573 13.8287 7.3285L6.62368 14.619C6.03768 15.205 5.26818 15.498 4.49918 15.498Z" />
    </svg>
  ),
  send: () => (
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_31_346)">
        <path d="M5.85421 10.8726L4.28798 10.1246L2.96563 13.39C2.96151 13.4003 2.95753 13.4107 2.9541 13.4212C2.78614 13.925 2.8235 14.3829 3.05943 14.71C3.26391 14.9939 3.59268 15.1503 3.98517 15.1503H3.9853C4.17111 15.1503 4.37079 15.1151 4.5787 15.0458C4.58928 15.0423 4.59971 15.0385 4.60988 15.0344L7.87529 13.712L7.12739 12.1456C6.9273 11.7269 6.27293 11.0726 5.85421 10.8726Z" />
        <path d="M17.955 0.790588L7.67285 11.0727C7.84355 11.2829 7.98569 11.4958 8.07907 11.6911L10.689 17.1562C11.0396 17.8904 11.5019 18 11.746 18H11.7462C11.9644 18 12.5034 17.9051 12.7966 17.0256L17.8955 1.72896C18.0098 1.38591 18.0287 1.06429 17.955 0.790588Z" />
        <path d="M6.92713 10.327L17.2098 0.0443573C17.102 0.0151062 16.9864 0 16.8645 0C16.6785 0 16.4788 0.0351562 16.2709 0.104507L0.974329 5.20326C0.165048 5.47311 0.0175569 5.94415 0.00162674 6.20082C-0.0143034 6.45763 0.0739992 6.94322 0.843729 7.31071L6.30888 9.92079C6.50402 10.0142 6.71688 10.1563 6.92713 10.327Z" />
      </g>
      <defs>
        <clipPath id="clip0_31_346">
          <rect width="18" height="18" />
        </clipPath>
      </defs>
    </svg>
  ),
  default: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.48462 13.0682H1.49645C1.36416 13.0682 1.23728 13.0191 1.14373 12.9318C1.05019 12.8444 0.997633 12.7259 0.997633 12.6023C0.999349 11.2436 1.57799 9.94106 2.60663 8.98032C3.63527 8.01958 5.0299 7.47913 6.48462 7.47753C7.44874 7.48031 8.38155 7.158 9.1116 6.56984C9.84165 5.98167 10.3199 5.16717 10.4584 4.27603C10.597 3.38489 10.3865 2.47699 9.86572 1.71918C9.34493 0.961374 8.54879 0.404584 7.62364 0.151141C6.69849 -0.102303 5.70648 -0.0353698 4.82993 0.339638C3.95339 0.714646 3.25121 1.37253 2.85243 2.19238C2.45366 3.01224 2.3851 3.93897 2.65934 4.80226C2.93358 5.66555 3.53221 6.40739 4.34519 6.89144C3.07714 7.30623 1.97815 8.07834 1.19986 9.10125C0.421569 10.1242 0.00233602 11.3474 0 12.6023C0 12.973 0.157661 13.3285 0.4383 13.5906C0.718939 13.8527 1.09957 14 1.49645 14H6.48462C6.61691 14 6.74379 13.9509 6.83733 13.8635C6.93088 13.7762 6.98343 13.6577 6.98343 13.5341C6.98343 13.4105 6.93088 13.292 6.83733 13.2047C6.74379 13.1173 6.61691 13.0682 6.48462 13.0682ZM3.49172 3.7504C3.49172 3.19754 3.66725 2.65709 3.99611 2.19739C4.32498 1.7377 4.7924 1.37942 5.33928 1.16784C5.88616 0.95627 6.48794 0.900913 7.0685 1.00877C7.64907 1.11663 8.18235 1.38286 8.60092 1.7738C9.01948 2.16473 9.30453 2.66282 9.42001 3.20506C9.53549 3.7473 9.47622 4.30935 9.2497 4.82014C9.02317 5.33092 8.63956 5.76749 8.14738 6.07465C7.6552 6.3818 7.07656 6.54575 6.48462 6.54575C5.69109 6.54501 4.9303 6.25026 4.36919 5.72619C3.80809 5.20213 3.49251 4.49155 3.49172 3.7504Z" />
    </svg>
  ),
}
