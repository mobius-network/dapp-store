import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  Vibration,
  View,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as _ from 'lodash';
import Animate from 'react-move/Animate';
import { easeLinear } from 'd3-ease';
import { colors } from './design/colors';
import { grid } from './design/grid';
import delay from './delay';

/**
 * Pin Code Component
 */

export const PinStatus = {
  choose: 'choose',
  confirm: 'confirm',
  enter: 'enter',
};

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

class PinCode extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      moveData: { x: 0, y: 0 },
      showError: false,
      textButtonSelected: '',
      colorDelete: 'rgb(211, 213, 218)',
      attemptFailed: false,
      changeScreen: false,
    };
    this.renderButtonNumber = this.renderButtonNumber.bind(this);
    this.renderCirclePassword = this.renderCirclePassword.bind(this);
    this.doShake = this.doShake.bind(this);
    this.showError = this.showError.bind(this);
    this.endProcess = this.endProcess.bind(this);
    this.failedAttempt = this.failedAttempt.bind(this);
    this.newAttempt = this.newAttempt.bind(this);
    this.onPressButtonNumber = this.onPressButtonNumber.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (
      this.props.pinCodeStatus !== 'failure'
      && nextProps.pinCodeStatus === 'failure'
    ) {
      this.failedAttempt();
    }
  }

  failedAttempt = async () => {
    this.setState({ changeScreen: true });
    await delay(300);
    this.setState({
      showError: true,
      attemptFailed: true,
      changeScreen: false,
      password: '',
    });
    this.doShake();
  }

  newAttempt = async () => {
    this.setState({ changeScreen: true });
    await delay(200);
    this.setState({
      changeScreen: false,
      showError: false,
      attemptFailed: false,
    });
  }

  onPressButtonNumber = async (text) => {
    if (this.state.showError && this.state.attemptFailed) this.newAttempt();
    const currentPassword = this.state.password + text;
    this.setState({ password: currentPassword });
    if (currentPassword.length === this.props.passwordLength) {
      switch (this.props.status) {
        case PinStatus.choose:
          this.endProcess(currentPassword);
          break;
        case PinStatus.confirm:
          if (currentPassword !== this.props.previousPin) {
            this.showError();
          } else {
            this.endProcess(currentPassword);
          }
          break;
        case PinStatus.enter:
          this.props.endProcess(currentPassword);
          await delay(300);
          break;
        default:
          break;
      }
    }
  }

  renderButtonNumber = (text) => {
    const disabled = (this.state.password.length === this.props.passwordLength
        || this.state.showError)
      && !this.state.attemptFailed;

    return (
      <Animate
        show={true}
        start={{
          opacity: 1,
        }}
        update={{
          opacity: [
            this.state.showError && !this.state.attemptFailed ? 0.5 : 1,
          ],
          timing: { duration: 200, ease: easeLinear },
        }}>
        {({ opacity }) => (
          <TouchableHighlight
            style={styles.buttonCircle}
            underlayColor="transparent"
            disabled={disabled}
            onPress={() => {
              this.onPressButtonNumber(text);
            }}>
            <Text
              style={[
                this.props.styleTextButton
                  ? this.props.styleTextButton
                  : styles.text,
                {
                  opacity,
                  color: colors.turquoise,
                },
              ]}>
              {text}
            </Text>
          </TouchableHighlight>
        )}
      </Animate>
    );
  }

  endProcess = (pwd) => {
    setTimeout(() => {
      this.setState({ changeScreen: true });
      setTimeout(() => {
        this.props.endProcess(pwd);
      }, 500);
    }, 400);
  }

  async doShake() {
    const duration = 70;
    Vibration.vibrate(500, false);
    const length = Dimensions.get('window').width / 3;
    await delay(duration);
    this.setState({ moveData: { x: length, y: 0 } });
    await delay(duration);
    this.setState({ moveData: { x: -length, y: 0 } });
    await delay(duration);
    this.setState({ moveData: { x: length / 2, y: 0 } });
    await delay(duration);
    this.setState({ moveData: { x: -length / 2, y: 0 } });
    await delay(duration);
    this.setState({ moveData: { x: length / 4, y: 0 } });
    await delay(duration);
    this.setState({ moveData: { x: -length / 4, y: 0 } });
    await delay(duration);
    this.setState({ moveData: { x: 0, y: 0 }, password: '' });
  }

  async showError() {
    this.setState({ changeScreen: true });
    await delay(300);
    this.setState({ showError: true, changeScreen: false });
    this.doShake();
    await delay(3000);
    this.setState({ changeScreen: true });
    await delay(200);
    this.setState({ showError: false });
    await delay(200);
    this.props.endProcess(this.state.password);
  }

  renderCirclePassword = () => {
    const {
      password,
      moveData,
      showError,
      changeScreen,
      attemptFailed,
    } = this.state;
    return (
      <View
        style={
          this.props.styleCircleHiddenPassword
            ? this.props.styleCircleHiddenPassword
            : styles.viewCirclePassword
        }>
        {_.range(this.props.passwordLength).map((val: number) => {
          const lengthSup = ((password.length >= val + 1 && !changeScreen) || showError)
            && !attemptFailed;
          const marginSup = ((password.length > 0 && !changeScreen) || showError)
            && !attemptFailed;
          return (
            <Animate
              key={val}
              show={true}
              start={{
                opacity: 0.5,
                height: 4,
                width: 4,
                borderRadius: 2,
                color: this.props.colorPassword
                  ? this.props.colorPassword
                  : colors.turquoise,
                marginRight: 10,
                marginLeft: 10,
                marginBottom: grid.unit * 2,
                marginTop: grid.unit * 4,
                x: 0,
                y: 0,
              }}
              update={{
                x: [moveData.x],
                opacity: [lengthSup ? 1 : 0.5],
                height: [lengthSup ? 8 : 4],
                width: [lengthSup ? 8 : 4],
                color: [
                  showError
                    ? this.props.colorPasswordError
                      ? this.props.colorPasswordError
                      : colors.alert
                    : this.props.colorPassword
                      ? this.props.colorPassword
                      : colors.turquoise,
                ],
                borderRadius: [lengthSup ? 4 : 2],
                marginRight: [lengthSup ? 8 : 10],
                marginLeft: [lengthSup ? 8 : 10],
                marginBottom: [marginSup ? 30 : grid.unit * 2],
                marginTop: [marginSup ? 62 : grid.unit * 4],
                y: [moveData.y],
                timing: { duration: 200, ease: easeLinear },
              }}>
              {({
                opacity,
                x,
                height,
                width,
                color,
                borderRadius,
                marginRight,
                marginTop,
                marginLeft,
                marginBottom,
              }) => (
                <View
                  style={{
                    left: x,
                    opacity,
                    height,
                    width,
                    borderRadius,
                    marginLeft,
                    marginRight,
                    marginBottom,
                    marginTop,
                    backgroundColor: color,
                  }}
                />
              )}
            </Animate>
          );
        })}
      </View>
    );
  }

  renderButtonDelete = opacity => (
    <TouchableHighlight
      style={styles.colIcon}
      disabled={this.state.password.length === 0}
      underlayColor="transparent"
      onHideUnderlay={() => this.setState({
        colorDelete: this.props.styleDeleteButtonColorHideUnderlay
          ? this.props.styleDeleteButtonColorHideUnderlay
          : 'rgb(211, 213, 218)',
      })
      }
      onShowUnderlay={() => this.setState({
        colorDelete: this.props.styleDeleteButtonColorShowUnderlay
          ? this.props.styleDeleteButtonColorShowUnderlay
          : colors.turquoise,
      })
      }
      onPress={() => this.state.password.length > 0
          && this.setState({ password: this.state.password.slice(0, -1) })
      }>
      <View>
        {!this.props.iconButtonDeleteDisabled && (
          <Icon
            name={
              this.props.styleDeleteButtonIcon
                ? this.props.styleDeleteButtonIcon
                : 'backspace'
            }
            size={
              this.props.styleDeleteButtonSize
                ? this.props.styleDeleteButtonSize
                : 30
            }
            color={this.state.colorDelete}
            style={{ opacity }}
          />
        )}
      </View>
    </TouchableHighlight>
  )

  renderTitle = (
    colorTitle: string,
    opacityTitle: number,
    attemptFailed: boolean,
    showError: boolean
  ) => (
    <Text
      style={[
        this.props.styleTextTitle
          ? this.props.styleTextTitle
          : styles.textTitle,
        { color: colorTitle, opacity: opacityTitle },
      ]}>
      {(attemptFailed && this.props.titleAttemptFailed)
          || (showError && this.props.titleConfirmFailed)
          || this.props.sentenceTitle}
    </Text>
  )

  renderSubtitle = (colorTitle, opacityTitle, attemptFailed, showError) => (
    <Text
      style={[
        this.props.styleTextSubtitle
          ? this.props.styleTextSubtitle
          : styles.textSubtitle,
        { color: colorTitle, opacity: opacityTitle },
      ]}>
      {attemptFailed || showError
        ? this.props.subtitleError
        : this.props.subtitle}
    </Text>
  )

  render() {
    const {
      password, showError, attemptFailed, changeScreen,
    } = this.state;
    return (
      <View
        style={
          this.props.styleContainer
            ? this.props.styleContainer
            : styles.container
        }>
        <Animate
          show={true}
          start={{
            opacity: 0,
            colorTitle: this.props.styleColorTitle
              ? this.props.styleColorTitle
              : colors.black,
            colorSubtitle: this.props.styleColorSubtitle
              ? this.props.styleColorSubtitle
              : colors.grey,
            opacityTitle: 1,
          }}
          enter={{
            opacity: [1],
            colorTitle: [
              this.props.styleColorTitle
                ? this.props.styleColorTitle
                : colors.black,
            ],
            colorSubtitle: [
              this.props.styleColorSubtitle
                ? this.props.styleColorSubtitle
                : colors.grey,
            ],
            opacityTitle: [1],
            timing: { duration: 200, ease: easeLinear },
          }}
          update={{
            opacity: [changeScreen ? 0 : 1],
            colorTitle: [
              showError || attemptFailed
                ? this.props.styleColorTitleError
                  ? this.props.styleColorTitleError
                  : colors.alert
                : this.props.styleColorTitle
                  ? this.props.styleColorTitle
                  : colors.grey,
            ],
            colorSubtitle: [
              showError || attemptFailed
                ? this.props.styleColorSubtitleError
                  ? this.props.styleColorSubtitleError
                  : colors.alert
                : this.props.styleColorSubtitle
                  ? this.props.styleColorSubtitle
                  : colors.grey,
            ],
            opacityTitle: [showError || attemptFailed ? grid.highOpacity : 1],
            timing: { duration: 200, ease: easeLinear },
          }}>
          {({
            opacity, colorTitle, colorSubtitle, opacityTitle,
          }) => (
            <View
              style={[
                this.props.styleViewTitle
                  ? this.props.styleViewTitle
                  : styles.viewTitle,
                { opacity },
              ]}>
              {this.props.titleComponent
                ? this.props.titleComponent()
                : this.renderTitle(
                  colorTitle,
                  opacityTitle,
                  attemptFailed,
                  showError
                )}
              {this.props.subtitleComponent
                ? this.props.subtitleComponent()
                : this.renderSubtitle(
                  colorSubtitle,
                  opacityTitle,
                  attemptFailed,
                  showError
                )}
            </View>
          )}
        </Animate>
        <View>
          {this.props.passwordComponent
            ? this.props.passwordComponent()
            : this.renderCirclePassword()}
        </View>
        <Grid style={{ width: vw }}>
          <Row>
            {_.range(1, 4).map(i => (
              <Col key={i} style={{ justifyContent: 'center', alignItems: 'center' }}>
                {this.renderButtonNumber(i.toString())}
              </Col>
            ))}
          </Row>
          <Row>
            {_.range(4, 7).map(i => (
              <Col key={i} style={{ justifyContent: 'center', alignItems: 'center' }}>
                {this.renderButtonNumber(i.toString())}
              </Col>
            ))}
          </Row>
          <Row>
            {_.range(7, 10).map(i => (
              <Col key={i} style={{ justifyContent: 'center', alignItems: 'center' }}>
                {this.renderButtonNumber(i.toString())}
              </Col>
            ))}
          </Row>
          <Row>
            <Col style={styles.colEmpty} />
            <Col style={styles.colButtonCircle}>
              {this.renderButtonNumber('0')}
            </Col>
            <Col>
              <Animate
                show={true}
                start={{
                  opacity: 0.5,
                }}
                update={{
                  opacity: [
                    password.length === 0
                    || password.length === this.props.passwordLength
                      ? 0.5
                      : 1,
                  ],
                  timing: { duration: 400, ease: easeLinear },
                }}
              >
                {({ opacity }) => this.renderButtonDelete(opacity)}
              </Animate>
            </Col>
          </Row>
        </Grid>
      </View>
    );
  }
}

export default PinCode;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: grid.unit * 4,
  },
  colButtonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },
  colEmpty: {
    flexGrow: 1,
  },
  colIcon: {
    flexGrow: 1,
    marginLeft: grid.unit / 2,
    marginRight: grid.unit / 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: grid.unit * 2,
    fontWeight: '200',
  },
  buttonCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: grid.unit * 4,
    height: grid.unit * 4,
    backgroundColor: 'rgb(242, 245, 251)',
    borderRadius: grid.unit * 2,
  },
  textTitle: {
    fontSize: 30,
    lineHeight: 60,
    fontWeight: '600',
  },
  textSubtitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  viewCirclePassword: {
    flexDirection: 'row',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
